import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <section
      className={
        'h-screen grid place-items-center bg-gradient-to-tr from-sky-600 via-blue-600 to-teal-600'
      }>
      <SignUp
        signInFallbackRedirectUrl={'/'}
        signInForceRedirectUrl={'/'}
        signInUrl='/sign-in'
        afterSignOutUrl={'/'}
        fallbackRedirectUrl={'/'}
        forceRedirectUrl={'/'}
        routing='virtual'
      />
    </section>
  );
}
