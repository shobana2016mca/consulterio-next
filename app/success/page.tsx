import Link from 'next/link';
// import { verifyPayment } from '../_lib/payment.actions';
import SuccessAnimation from './_components/SuccessAnimation';

export default async function SuccessPage({
  params,
  searchParams,
}: SuccessPageProps) {
  const isDev = process.env.NODE_ENV === 'development';

  const paymentId = searchParams.razorpay_payment_id;
  const paymentlinkId = searchParams.razorpay_payment_link_id;
  const paymentLinkReferenceId =
    searchParams.razorpay_payment_link_reference_id;
  const paymentLinkStatus = searchParams.razorpay_payment_link_status;
  const signature = searchParams.razorpay_signature;

  // const verify = await verifyPayment({
  //   razorpay_payment_id: paymentId,
  //   razorpay_payment_link_id: paymentlinkId,
  //   razorpay_payment_link_reference_id: paymentLinkReferenceId,
  //   razorpay_payment_link_status: paymentLinkStatus,
  //   razorpay_signature: signature,
  // });

  // console.log('payement_verification', verify);

  return (
    <main>
      <section className={'grid items-center justify-items-center my-16'}>
        <div
          className={
            'ring-1 ring-slate-600 rounded-lg shadow-lg max-w-xl p-16 space-y-8'
          }>
          <SuccessAnimation />
          <h2 className={'text-2xl text-center font-bold'}>Payment Success</h2>

          <div>
            <p className={'text-sm font-semibold'}>
              <span className={''}>Payment Link ID : </span>
              <span>{paymentId}</span>
            </p>
            <p className={'text-sm font-semibold'}>
              <span className={''}>Payment Link Reference ID : </span>
              <span>{paymentLinkReferenceId}</span>
            </p>

            <p className={'text-sm font-semibold'}>
              <span className={''}>Payment Link Status : </span>
              <span className={'uppercase'}>{paymentLinkStatus}</span>
            </p>
          </div>

          {/* <form
            action={async () => {
              'use server';
              await verifyPayment({
                razorpay_payment_id: paymentId,
                razorpay_payment_link_id: paymentlinkId,
                razorpay_payment_link_reference_id: paymentLinkReferenceId,
                razorpay_payment_link_status: paymentLinkStatus,
                razorpay_signature: signature,
              });

              // redirect('/');
            }}>
            <div className={'flex items-center justify-center'}>
              <button
                // href={'/'}
                className={
                  'px-6 py-4 rounded-lg shadow-lg bg-blue-500 text-white text-sm'
                }>
                Go back to home
              </button>
            </div>

          </form> */}
          {/* {isDev ? <button>Get Token</button> : null} */}
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
