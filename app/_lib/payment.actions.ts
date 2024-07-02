'use server';

import crypto from 'crypto';
import { headers } from 'next/headers';
import Razorpay from 'razorpay';
import { validatePaymentVerification } from 'razorpay/dist/utils/razorpay-utils';

/*
1.1 Install Razorpay Node.js SDK. ✅

1.2 Instantiate Razorpay. ✅

1.3 Create an Order in Server. ✅

1.4 Add Checkout Options. ✅

1.5 Store Fields in Server. ✅

1.6 Verify Payment Signature.

1.7 Verify Payment Status.
*/

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createOrder(formData: FormData) {
  if (!instance) {
    throw new Error('Razorpay instance could not be created.');
  }

  if (!formData) {
    throw new Error("Form data can't be empty.");
  }

  // 1. Generate a order_id with crypto
  const orderRefId = crypto.randomBytes(7).toString('hex');
  const referenceId = crypto.randomBytes(7).toString('hex');
  const amount = Number(formData.get('amount') as string) * 100;
  const currency = 'INR';
  const receipt = orderRefId;
  const notes = {
    workshop: 'Interview Mastery Workshop',
  };

  // 2. Create a new order with Razorpay
  const orderCreateResponse = await instance.orders.create({
    amount: amount,
    currency: currency,
    receipt: receipt,
    notes: notes,
    payment_capture: true,
    // payment: {
    //   capture: 'automatic',
    //   capture_options: {
    //     automatic_expiry_period: 12,
    //     manual_expiry_period: 300,
    //     refund_speed: 'optimum',
    //   },
    // },
  });

  if (orderCreateResponse.status !== 'created') {
    throw new Error('Order could not be created.');
  }

  console.log('order: ', orderCreateResponse);

  // 3. Return the response
  const checkout = await checkoutSession({
    orderId: orderCreateResponse.id,
    formData,
    amount,
    currency,
    notes,
    referenceId,
  });

  if (checkout.status !== 'created') {
    throw new Error('Checkout could not be created.');
  }

  return checkout;
}

export async function checkoutSession(orderDetails: checkoutType) {
  const { orderId, formData, amount, currency, notes, referenceId } =
    orderDetails;

  if (!instance) {
    throw new Error('Razorpay instance could not be created.');
  }

  const checkoutResponse = await instance.paymentLink.create({
    amount: amount,
    currency: currency,
    accept_partial: false, // pay later option
    description: 'Interview Mastery Workshop',
    customer: {
      name: formData.get('fullName') as string,
      email: formData.get('email') as string,
      contact: formData.get('phone') as string,
    },
    notify: {
      sms: true,
      email: true,
      whatsapp: true,
    },
    notes: notes,
    reminder_enable: true,
    callback_method: 'get',
    callback_url: `https://${process.env.VERCEL_URL}/success`,
    // callback_url: `http://localhost:3000/success`,
    upi_link: false, // test mode false , live mode true
    reference_id: referenceId,
    // expire_by: Math.floor(Date.now() / 1000) + 86400, // 24 hours
  });

  if (!checkoutResponse) {
    throw new Error('Payment link could not be created.');
  }

  console.log('payment: ', checkoutResponse);

  // i need to capture the payment also
  // GET /success?razorpay_payment_id=pay_OTTDL2tgIiWU2K&razorpay_payment_link_id=plink_OTTCYieAgfD5gO&razorpay_payment_link_reference_id=d2b0395d271cf3&razorpay_payment_link_status=paid&razorpay_signature=da6aa470065fe1038ac5a643cb5c521d523bc6cf6c7c97a08f12cc0e1da7aa98 200 in 453ms

  const _headers = headers();
  console.log(_headers);

  // await verifyPayment(orderId);

  return checkoutResponse;
}

export async function verifyPayment(
  orderId: string,
  paymentId: string,
  signature: string
) {
  const validate = validatePaymentVerification(
    {
      order_id: orderId,
      payment_id: paymentId,
    },
    signature,
    process.env.RAZORPAY_KEY_SECRET!
  );

  console.log(validate);
}

export async function generateInvoice() {
  console.log('invoice');
}

/*
order:  {
  amount: 49900,
  amount_due: 49900,
  amount_paid: 0,
  attempts: 0,
  created_at: 1719925501,
  currency: 'INR',
  entity: 'order',
  id: 'order_OTm2B5odWQK3zH',
  notes: { workshop: 'Interview Mastery Workshop' },
  offer_id: null,
  receipt: 'c975f219d58eb7',
  status: 'created'
}

payment:  {
  accept_partial: false,
  amount: 49900,
  amount_paid: 0,
  callback_method: 'get',
  callback_url: 'http://localhost:3000/success',
  cancelled_at: 0,
  created_at: 1719925501,
  currency: 'INR',
  customer: {
    contact: '123-456-7890',
    email: 'someone@example.com',
    name: 'John Doe'
  },
  description: 'Interview Mastery Workshop',
  expire_by: 0,
  expired_at: 0,
  first_min_partial_amount: 0,
  id: 'plink_OTm2BXyKImvUhd',
  notes: { workshop: 'Interview Mastery Workshop' },
  notify: { email: true, sms: true, whatsapp: false },
  payments: null,
  reference_id: '664f2a566ef4ea',
  reminder_enable: true,
  reminders: [],
  short_url: 'https://rzp.io/i/YSP9LIQCD',
  status: 'created',
  updated_at: 1719925501,
  upi_link: false,
  user_id: '',
  whatsapp_link: false
}

AFTER success payment
 GET /success?razorpay_payment_id=pay_OTm2kIUMpMc0Pu&razorpay_payment_link_id=plink_OTm2BXyKImvUhd&razorpay_payment_link_reference_id=664f2a566ef4ea&razorpay_payment_link_status=paid&razorpay_signature=df47ca14c072e5586fc559c6418a5b6289dc8c911320e9eac7d54269409acd76
*/
