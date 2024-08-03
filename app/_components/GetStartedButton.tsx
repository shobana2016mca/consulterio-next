import { SignedOut, SignInButton, useUser } from '@clerk/nextjs';
import { ArrowRight } from '../_assets/icons';

export default function GetStartedButton() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className={'hidden sm:block'}>
      <SignedOut>
        <SignInButton
          mode='modal'
          forceRedirectUrl={'/sign-in'}
          fallbackRedirectUrl={'/'}
          signUpFallbackRedirectUrl={'/'}
          signUpForceRedirectUrl={'/sign-up'}>
          <button
            disabled={!isLoaded}
            className='flex items-center justify-center px-2 py-1 space-x-2 transition rounded-md ring-1 ring-sky-900 md:px-4 md:py-2 text-sky-600 bg-sky-950 hover:bg-sky-700 hover:text-white group'>
            <span
              className={
                'text-sm md:text-base lg:text-lg font-normal md:font-medium'
              }>
              Get Started
            </span>
            <span className={'hidden sm:block'}>
              <ArrowRight className='w-3 h-3 transition-transform transform group-hover:translate-x-1 ' />
            </span>
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
