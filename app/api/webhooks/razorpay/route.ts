import { generateMeetingLink } from '@/app/_lib/meeting.actions';
import {
  updateStudent,
  updateWithTransaction,
} from '@/app/_lib/student.action';
import { createTransaction } from '@/app/_lib/transaction.actions';
import crypto from 'crypto';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { validateWebhookSignature } from 'razorpay/dist/utils/razorpay-utils';

const rzp = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest, res: NextResponse) {
  const _headers = headers();
  // const cookie = cookies();

  const razorpaySignature = _headers.get('x-razorpay-signature')!;
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;

  const body = await req.json();
  const payload = JSON.stringify(body);

  // Generate the expected signature
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  // console.log('expectedSign', expectedSignature);
  // console.log('razorpaySign', razorpaySignature);

  try {
    const isValid = validateWebhookSignature(
      payload,
      razorpaySignature,
      secret
    );

    if (!isValid) {
      return Response.json(
        { message: 'signature mismatched' },
        { status: 400, statusText: 'Bad Request' }
      );
    }

    if (expectedSignature !== razorpaySignature) {
      return Response.json(
        { message: 'not a legit transaction' },
        { status: 400, statusText: 'Bad Request' }
      );
    }

    // Handle the event
    if (
      body.event === 'payment.captured' ||
      body.event === 'qr.payment.captured'
    ) {
      const payment = body;
      // console.log('Payment captured', payment);

      // const paymentDetails = await rzp.payments.capture(
      //   payment.payload.payment.entity.id,
      //   payment.payload.payment.entity.amount,
      //   'INR'
      // );
      // console.log('Payment details', paymentDetails);

      const paymentDetails = await rzp.payments.fetch(
        payment.payload.payment.entity.id
      );
      // console.log('Payment details', paymentDetails);

      const updateObj = new FormData();
      updateObj.append('contact', (paymentDetails.contact as string).slice(3));
      updateObj.append('orderId', paymentDetails.order_id);
      updateObj.append('paymentId', paymentDetails.id);
      updateObj.append('paymentAmount', paymentDetails.amount as string);
      updateObj.append('expectedSignature', expectedSignature);
      updateObj.append('razorpaySignature', razorpaySignature);

      // console.log('Update obj', updateObj);

      const updatedStudent = await updateStudent(updateObj);
      // console.log('Updated student', updatedStudent);

      const transaction = {
        id: paymentDetails.id,
        entity: paymentDetails.entity,
        amount: Number(paymentDetails.amount),
        currency: paymentDetails.currency,
        status: paymentDetails.status,
        order_id: paymentDetails.order_id,
        invoice_id: paymentDetails.invoice_id,
        international: paymentDetails.international,
        method: paymentDetails.method,
        amount_refunded: paymentDetails?.amount_refunded ?? 0,
        refund_status: paymentDetails.refund_status,
        captured: paymentDetails.captured,
        description: paymentDetails?.description ?? '',
        card_id: paymentDetails?.card_id ?? '',
        card: {
          id: paymentDetails?.card?.id ?? '',
          entity: paymentDetails?.card?.entity ?? '',
          name: paymentDetails?.card?.name ?? '',
          last4: paymentDetails?.card?.last4 ?? '',
          network: paymentDetails?.card?.network ?? '',
          type: paymentDetails?.card?.type ?? '',
          issuer: paymentDetails?.card?.issuer ?? '',
          international: paymentDetails?.card?.international ?? false,
          emi: paymentDetails?.card?.emi ?? false,
          sub_type: paymentDetails?.card?.sub_type ?? '',
          token_iin: paymentDetails?.card?.token_iin ?? '',
        },
        bank: paymentDetails.bank ?? '',
        wallet: paymentDetails.wallet ?? '',
        vpa: paymentDetails.vpa ?? '',
        email: paymentDetails.email,
        contact: paymentDetails.contact.toString(),
        notes: {
          workshop: paymentDetails.notes.workshop,
        },
        fee: paymentDetails.fee,
        tax: paymentDetails.tax,
        error_code: paymentDetails.error_code ?? '',
        error_description: paymentDetails.error_description ?? '',
        error_source: paymentDetails.error_source ?? '',
        error_step: paymentDetails.error_step ?? '',
        error_reason: paymentDetails.error_reason ?? '',
        acquirer_data: {
          auth_code: paymentDetails.acquirer_data.auth_code ?? '',
        },
        created_at: paymentDetails.created_at,
        studentId: updatedStudent._id,
      };

      // create a new transaction
      const newTransaction = await createTransaction(transaction);

      // console.log('New transaction', newTransaction);

      // update the student with the transaction id
      // const updatedStudentWithTransaction = await updateWithTransaction({
      //   studentId: updatedStudent._id,
      //   transactionId: newTransaction._id,
      // });

      // const meetingLink =  await generateMeetingLink(updatedStudent.fullName, updatedStudent.email);

      const [student, meeting] = await Promise.all([
        updateWithTransaction({
          studentId: updatedStudent._id,
          transactionId: newTransaction._id,
        }),
        generateMeetingLink(updatedStudent.name, updatedStudent.email),
      ]);

      // console.log('Updated student with transaction', student);
      // console.log('Meeting link', meeting);

      // return Response.json(
      //   { status: 'success' },
      //   { status: 200, statusText: 'OK' }
      // );
    }

    return Response.json(
      { status: 'success' },
      { status: 200, statusText: 'OK' }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.name);
      console.log(error.message);
      // console.table(error.stack);
      // return Response.json(
      //   { status: 'error' },
      //   { status: 502, statusText: error.message }
      // );
      return Response.json(
        { status: 'success' },
        { status: 200, statusText: 'OK' }
      );
    }
    // return Response.json(
    //   { status: 'error' },
    //   { status: 500, statusText: 'Bad Gateway' }
    // );
    return Response.json(
      { status: 'success' },
      { status: 200, statusText: 'OK' }
    );
  }
}
