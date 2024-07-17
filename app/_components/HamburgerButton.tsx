import { DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function HamburgerButton({ open }: { open: boolean }) {
  return (
    <DisclosureButton className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-sky-950 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
      <span className='absolute -inset-0.5' />
      <span className='sr-only'>Open main menu</span>
      {open ? (
        <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
      ) : (
        <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
      )}
    </DisclosureButton>
  );
}
