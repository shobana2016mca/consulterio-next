import Link from 'next/link';
import FailureAnimation from './_components/FailureAnimation';

type FailurePageProps = {
  params: any;
  searchParams: {
    razorpay_payment_id: string;
    razorpay_payment_link_id: string;
    razorpay_payment_link_reference_id: string;
    razorpay_payment_link_status: string;
    razorpay_signature: string;
  };
};
export default function PaymentFailurePage({
  params,
  searchParams,
}: FailurePageProps) {
  const paymentId = searchParams.razorpay_payment_id;
  const paymentlinkId = searchParams.razorpay_payment_link_id;
  const paymentLinkReferenceId =
    searchParams.razorpay_payment_link_reference_id;
  const paymentLinkStatus = searchParams.razorpay_payment_link_status;
  const signature = searchParams.razorpay_signature;

  return (
    <main>
      <section className={'grid items-center justify-items-center my-16'}>
        <div
          className={
            'ring-1 ring-slate-600 rounded-lg shadow-lg max-w-xl p-16 space-y-8'
          }>
          <FailureAnimation />
          <h2 className={'text-2xl text-center font-bold'}>Payment Failure</h2>

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

          <div>
            <p>
              You&apos;re payment failed. Please try again or contact support.
            </p>
          </div>

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
