'use server';

import crypto from 'crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Razorpay from 'razorpay';
import { validatePaymentVerification } from 'razorpay/dist/utils/razorpay-utils';
import { generateMeetingLink } from './meeting.actions';
import { sendMail } from './nodemailer';

/*
1.1 Install Razorpay Node.js SDK. ✅

1.2 Instantiate Razorpay. ✅

1.3 Create an Order in Server. ✅

1.4 Add Checkout Options. ✅

1.5 Store Fields in Server. ✅

1.6 Verify Payment Signature.

1.7 Verify Payment Status.
*/

// let form_data: FormData = new FormData();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const callbackURL =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_EMAIL_PUBLIC_SERVER_URL
    : process.env.NEXT_EMAIL_SERVER_URL;

const isDev = process.env.NODE_ENV === 'development';

export async function createOrder(formData: FormData) {
  const cookie = cookies();

  if (!instance) {
    throw new Error('Razorpay instance could not be created.');
  }

  if (!formData) {
    throw new Error("Form data can't be empty.");
  }

  // Store the form data
  cookie.set({
    name: 'form_data',
    value: JSON.stringify(Object.fromEntries(formData.entries())),
    expires: new Date(Date.now() + 3599 * 1000),
    httpOnly: isDev ? false : true,
    secure: isDev ? false : true,
    sameSite: isDev ? 'lax' : 'strict',
  });
  // form_data.set('fullName', formData.get('fullName') as string);
  // form_data.set('email', formData.get('email') as string);
  // form_data.set('phone', formData.get('phone') as string);
  // form_data.set('amount', formData.get('amount') as string);
  // form_data.set('batch', formData.get('batch') as string);

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

  // 4. Store the form data
  // form_data = formData;

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
    callback_url: `${callbackURL}/success`,
    // callback_url: `http://localhost:3000/success`,
    upi_link: false, // test mode false , live mode true
    reference_id: referenceId,
    // expire_by: Math.floor(Date.now() / 1000) + 86400, // 24 hours
  });

  if (!checkoutResponse) {
    throw new Error('Payment link could not be created.');
  }

  console.log('payment: ', checkoutResponse);

  // Generate meeting link
  // const meetingLink = await generateMeetingLink({
  //   orderId,
  //   formData,
  //   amount,
  //   currency,
  //   notes,
  //   referenceId,
  // });

  // if (!meetingLink) {
  //   throw new Error('Meeting link could not be generated.');
  // }

  // console.log('meeting: ', meetingLink);

  // Send payment confirmation email
  const paymentConfirmationEmail = await sendMail({
    type: 'payment_confirmation',
    sendTo: formData.get('email') as string,
    subject: 'Payment Confirmation Email - Interview Mastery Workshop',
    workshopData: {
      userFirstname: formData.get('fullName') as string,
      meetingLink: '',
    },
  });

  // i need to capture the payment also
  // GET /success?razorpay_payment_id=pay_OTTDL2tgIiWU2K&razorpay_payment_link_id=plink_OTTCYieAgfD5gO&razorpay_payment_link_reference_id=d2b0395d271cf3&razorpay_payment_link_status=paid&razorpay_signature=da6aa470065fe1038ac5a643cb5c521d523bc6cf6c7c97a08f12cc0e1da7aa98 200 in 453ms

  // const _headers = headers();
  // console.log(_headers);

  // await verifyPayment(orderId);

  return checkoutResponse;
}

type VerifyPaymentProps = {
  razorpay_payment_id: string;
  razorpay_payment_link_id: string;
  razorpay_payment_link_reference_id: string;
  razorpay_payment_link_status: string;
  razorpay_signature: string;
};

export async function verifyPayment(data: VerifyPaymentProps) {
  const cookie = cookies();
  const paymentId = data.razorpay_payment_id;
  const paymentlinkId = data.razorpay_payment_link_id;
  const paymentLinkReferenceId = data.razorpay_payment_link_reference_id;
  const paymentLinkStatus = data.razorpay_payment_link_status;
  const paymentSignature = data.razorpay_signature;
  const secret = process.env.RAZORPAY_KEY_SECRET!;
  const validate = validatePaymentVerification(
    {
      payment_link_id: paymentlinkId,
      payment_id: paymentId,
      payment_link_reference_id: paymentLinkReferenceId,
      payment_link_status: paymentLinkStatus,
    },
    paymentSignature,
    secret
  );

  // console.log(validate);

  if (validate && cookie.get('form_data')) {
    console.log('Payment Verified', validate);
    // redirect('/');
    // console.log('form_data', Object.fromEntries(form_data.entries()));

    const form_data = JSON.parse(cookie.get('form_data')?.value as string);
    // console.log('form_data', form_data);
    // const user = {
    //   name: form_data.get('fullName') as string,
    //   email: form_data.get('email') as string,
    //   contact: form_data.get('phone') as string,
    // };

    // console.log('user', user);
    await generateMeetingLink(form_data.fullName, form_data.email);
    redirect('/');
  } else {
    console.log('Payment Not Verified', validate);
    redirect('/failure');
    // cookie.delete('form_data');
  }

  // reset form data
  // form_data = new FormData();
  // cookie.delete('form_data');
}

export async function generateInvoice() {
  console.log('invoice');
}

/// WEBHOOK ///
const signature =
  'VvgpDiZbcV4RwWS3dPPz52n1jpwFcaKNQNHFfqhTjZZJPjvR5dB/LYVYc/3bShXw4J5QHQqvm2+8I5JRAuogfj1vGY12aN2Fr+2z4RNY6QBBRAff4RxUCiyXu5vNm02KR8bmeUUN/eS6EllnyRMCVDo5yrQm0tk7aiCNbgbEyF2bHAsAOMM8jenBXVHPxdOcVtS2uCwd6N9qGPk8ttb9iCFYyX3Tb/asC54xNEAZ1bN8oJf0Gb/41xvj2/ilaEpz9323HUdpVIwcSzS1Si45vIclYaldnTsjNGHmIbuVmAiAWwZe9NW+hBlKN+jegdIvsOmQO+JF7f4ZU5pM64xpXw==';

async function check() {
  try {
    const res = await fetch('https://localhost:3000/api/webhooks/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Razorpay-Signature': signature,
      },
      body: JSON.stringify({
        razorpay_payment_id: 'pay_OTgArCSqMoZOdI',
        razorpay_payment_link_id: 'plink_OTg9mr7JUb02uE',
        razorpay_payment_link_reference_id: '0ef167d27be794',
        razorpay_payment_link_status: 'paid',
        razorpay_signature:
          'd6613230c6adccaf5be540372126c6d932fc31a6565060bd4e61e41ec2f0acd5',
      }),
    });

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// PAYMENT RESPONSE FROM RAZORPAY
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
