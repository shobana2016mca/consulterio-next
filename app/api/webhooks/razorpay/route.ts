import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const rzp = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// import { validateWebhookSignature } from 'razorpay/dist/utils/razorpay-utils';

export async function POST(req: NextRequest, res: NextResponse) {
  const _headers = headers();

  const signature = _headers.get('X-Razorpay-Signature');

  console.log(signature);

  const body = JSON.parse(await req.json());

  if (!signature) {
    return Response.json(
      { status: 'error here' },
      { status: 400, statusText: 'Bad Request' }
    );
  }

  const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;

  // Generate the expected signature
  // const expectedSignature = crypto
  //   .createHmac('sha256', secret)
  //   .update(body)
  //   .digest('hex');

  // const isValid = validateWebhookSignature(
  //   JSON.stringify(await req.json()),
  //   signature,
  //   process.env.RAZORPAY_WEBHOOK_SECRET!
  // );

  try {
    // if (expectedSignature !== signature) {
    //   return Response.json(
    //     { message: 'not a legit transaction' },
    //     { status: 400, statusText: 'Bad Request' }
    //   );
    // }

    return Response.json(
      { status: 'success' },
      { status: 200, statusText: 'OK' }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);

      return Response.json(
        { status: 'error' },
        { status: 500, statusText: error.message }
      );
    }
  }
}
