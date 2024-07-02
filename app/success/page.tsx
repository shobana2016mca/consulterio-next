import Link from 'next/link';
import { verifyPayment } from '../_lib/payment.actions';
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

export default async function SuccessPage({
  params,
  searchParams,
}: PageParamsPropType) {
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

  await verifyPayment(
    searchParams.razorpay_payment_link_reference_id,
    searchParams.razorpay_payment_id,
    searchParams.razorpay_signature
  );

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
          <div className={'flex items-center justify-center'}>
            <Link
              href={'/'}
              className={
                'px-6 py-4 rounded-lg shadow-lg bg-blue-500 text-white text-sm'
              }>
              Go back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
