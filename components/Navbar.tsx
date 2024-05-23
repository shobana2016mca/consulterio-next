'use client';

import { ArrowRight } from '@/assets/icons';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About us', href: '/about-us', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Contact us', href: '/contact-us', current: false },
  { name: 'Get a quote', href: '/get-a-quote', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <Disclosure as='nav' className='bg-sky-950 sticky top-0 z-50'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <div className='relative flex h-16 items-center justify-between'>
                <div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
                  {/* Mobile menu button*/}
                  <DisclosureButton className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-sky-950 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </DisclosureButton>
                </div>
                <div className='flex flex-1 items-center justify-center lg:items-stretch lg:justify-start'>
                  <div className='flex flex-shrink-0 items-center'>
                    <Link href='/' className={'h-8 w-full'}>
                      <Image
                        className='w-full h-full object-contain'
                        src='/logo.png'
                        alt='Your Company'
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                  <div className='hidden md:ml-6 lg:block'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              isActive
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-sky-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}>
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <SignedIn>
                    {/* Mount the UserButton component */}
                    <UserButton
                      afterMultiSessionSingleSignOutUrl='/'
                      afterSignOutUrl='/'
                      afterSwitchSessionUrl='/'
                    />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton
                      mode='modal'
                      forceRedirectUrl={'/'}
                      fallbackRedirectUrl={'/'}
                      signUpForceRedirectUrl={'/'}
                      signUpFallbackRedirectUrl={'/'}>
                      <button className='flex items-center justify-center space-x-2 rounded-md ring-1 ring-sky-900 px-4 py-2 font-medium text-sky-600 transition bg-sky-950 hover:bg-sky-700 hover:text-white group'>
                        <span> Get Started </span>
                        <span>
                          <ArrowRight className='w-3 h-3 transform group-hover:translate-x-1 transition-transform ' />
                        </span>
                      </button>
                    </SignInButton>
                  </SignedOut>

                  {/* Profile dropdown */}
                </div>
              </div>
            </div>

            <DisclosurePanel className='lg:hidden'>
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <DisclosureButton
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}>
                      {item.name}
                    </DisclosureButton>
                  );
                })}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
}
