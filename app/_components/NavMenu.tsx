import { SignedOut, SignUpButton, useUser } from '@clerk/nextjs';
import { DisclosurePanel } from '@headlessui/react';
import { ArrowRight } from '../_assets/icons';
import NavLinks from './NavLinks';

export default function NavMenu() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <DisclosurePanel className='lg:hidden'>
      {/* <DisclosurePanel className='relative w-full h-full lg:hidden'> */}
      <div className='grid px-2 pt-2 pb-3 space-y-1'>
        {/* <div className='absolute grid w-full px-2 pt-2 pb-3 space-y-1 transition bg-blue-500 h-min'> */}
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
                className='flex items-center justify-center px-2 py-1 space-x-2 transition rounded-md ring-1 ring-sky-900 md:px-4 md:py-2 text-sky-600 bg-sky-950 hover:bg-sky-700 hover:text-white group'>
                <span
                  className={
                    'text-sm md:text-base lg:text-lg font-normal md:font-medium'
                  }>
                  Get Started
                </span>
                <span>
                  <ArrowRight className='w-3 h-3 transition-transform transform group-hover:translate-x-1 ' />
                </span>
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>
    </DisclosurePanel>
  );
}
