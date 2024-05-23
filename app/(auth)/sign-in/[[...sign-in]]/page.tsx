import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <section
      className={
        'h-screen grid place-items-center bg-gradient-to-tr from-sky-600 via-blue-600 to-teal-600'
      }>
      <SignIn
        signUpFallbackRedirectUrl={'/'}
        signUpForceRedirectUrl={'/'}
        signUpUrl='/sign-up'
        afterSignOutUrl={'/'}
        fallbackRedirectUrl={'/'}
        forceRedirectUrl={'/'}
        routing='virtual'
      />
    </section>
  );
}
