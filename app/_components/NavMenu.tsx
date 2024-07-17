import { SignedOut, SignUpButton, useUser } from '@clerk/nextjs';
import { DisclosurePanel } from '@headlessui/react';
import { ArrowRight } from '../_assets/icons';
import NavLinks from './NavLinks';

export default function NavMenu() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <DisclosurePanel className='lg:hidden'>
      {/* <DisclosurePanel className='lg:hidden relative w-full h-full'> */}
      <div className='space-y-1 px-2 pb-3 pt-2 grid'>
        {/* <div className='space-y-1 px-2 pb-3 pt-2 grid absolute h-min transition w-full bg-blue-500'> */}
        <NavLinks />

        <div className={'block sm:hidden'}>
          <SignedOut>
            <SignUpButton
              mode='modal'
              forceRedirectUrl={'/sign-up'}
              fallbackRedirectUrl={'/'}
              signInForceRedirectUrl={'/sign-in'}
              signInFallbackRedirectUrl={'/'}>
              <button
                disabled={!isLoaded}
                className='flex items-center justify-center space-x-2 rounded-md ring-1 ring-sky-900 px-2 py-1 md:px-4 md:py-2 text-sky-600 transition bg-sky-950 hover:bg-sky-700 hover:text-white group'>
                <span
                  className={
                    'text-sm md:text-base lg:text-lg font-normal md:font-medium'
                  }>
                  Get Started
                </span>
                <span>
                  <ArrowRight className='w-3 h-3 transform group-hover:translate-x-1 transition-transform ' />
                </span>
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>
    </DisclosurePanel>
  );
}
