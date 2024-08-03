import Image from 'next/image';

export default function PaymentLogo() {
  return (
    <>
      <div className={'relative aspect-[70/9] w-full h-full self-center'}>
        <Image
          src='https://cdn.razorpay.com/static/assets/logo/rzp_payment_icon.svg'
          alt='payment-logo'
          // width={176}
          // height={46}
          fill
          sizes='100% 100%'
          className='object-contain w-full h-full shadow-sm'
        />
      </div>
      <p className={'text-xs text-center'}>
        *Pay securely with Razorpay. We do not store your card or any other
        details.
      </p>
    </>
  );
}
