import Link from 'next/link';
import { getToken } from '../_lib/meeting.actions';
// import { sgEmail } from '@/app/_lib/user.actions';

// import { validatePaymentVerification } from 'razorpay/dist/utils/razorpay-utils';

/*
{
  razorpay_payment_id: 'pay_OTgArCSqMoZOdI',
  razorpay_payment_link_id: 'plink_OTg9mr7JUb02uE',
  razorpay_payment_link_reference_id: '0ef167d27be794',
  razorpay_payment_link_status: 'paid',
  razorpay_signature: 'd6613230c6adccaf5be540372126c6d932fc31a6565060bd4e61e41ec2f0acd5'
}
*/

type PageParamsPropType = {
  params: any;
  searchParams: {
    razorpay_payment_id: string;
    razorpay_payment_link_id: string;
    razorpay_payment_link_reference_id: string;
    razorpay_payment_link_status: string;
    razorpay_signature: string;
  };
};

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

export default async function SuccessPage({
  params,
  searchParams,
}: PageParamsPropType) {
  const isDev = process.env.NODE_ENV === 'development';

  // await check();
  // function verifyPayment() {
  //   const validate = validatePaymentVerification(
  //     {
  //       order_id: searchParams.razorpay_payment_link_reference_id,
  //       payment_id: searchParams.razorpay_payment_id,
  //     },
  //     searchParams.razorpay_signature,
  //     process.env.RAZORPAY_KEY_SECRET!
  //   );

  //   console.log(validate);
  // }

  // await verifyPayment(
  //   searchParams.razorpay_payment_link_reference_id,
  //   searchParams.razorpay_payment_id,
  //   searchParams.razorpay_signature
  // );

  // await getToken();

  return (
    <main>
      <section className={'h-screen grid items-center justify-items-center'}>
        <div
          className={
            'ring-1 ring-blue-500 rounded-lg shadow-lg max-w-xl p-16 space-y-8'
          }>
          <h1 className={'text-2xl text-center'}>Payment Success</h1>
          <p>
            Payment Link Reference ID:{' '}
            {searchParams.razorpay_payment_link_reference_id}
          </p>
          <form action={getToken}>
            <div className={'flex items-center justify-center'}>
              <Link
                href={'/'}
                className={
                  'px-6 py-4 rounded-lg shadow-lg bg-blue-500 text-white text-sm'
                }>
                Go back to home
              </Link>
            </div>

            {/* {isDev ? <button>Get Token</button> : null} */}
            <button>Send Email</button>
          </form>

          {/* <form action={createPdfFromDocx}>
            <button
              className={'py-6 px-4 text-sm text-white rounded-md bg-blue-500'}>
              Generate Certificate
            </button>
          </form> */}
        </div>
      </section>
    </main>
  );
}
