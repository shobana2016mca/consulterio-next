'use client';

import { Disclosure } from '@headlessui/react';
import GetStartedButton from './GetStartedButton';
import HamburgerButton from './HamburgerButton';
import NavLinks from './NavLinks';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import ProfileMenu from './ProfileMenu';

export default function Navbar() {
  return (
    <Disclosure as='nav' className='sticky top-0 z-50 bg-sky-950'>
      {({ open }) => (
        <>
          <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
                {/* Mobile menu button*/}
                <HamburgerButton open={open} />
              </div>
              <div className='flex items-center justify-center flex-1 lg:items-stretch lg:justify-start'>
                {/* Navlogo */}
                <div className='flex items-center flex-shrink-0'>
                  <NavLogo />
                </div>

                {/* Desktop links */}
                <div className='hidden md:ml-6 lg:block'>
                  <div className='flex space-x-4'>
                    <NavLinks />
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <GetStartedButton />

                {/* Profile dropdown */}
                <ProfileMenu />
              </div>
            </div>
          </div>

          <NavMenu />
        </>
      )}
    </Disclosure>
  );
}
