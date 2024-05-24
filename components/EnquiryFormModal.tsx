import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import 'animate.css';
import { Fragment } from 'react';

import { useEnquiryModalContext } from '@/contexts/EnquiryFormModalContext';
import { classNames } from '@/lib/utils';
import EnquiryForm from './EnquiryForm';

export default function EnquiryFormModal() {
  const { isOpenEnquiryModal, onToogle } = useEnquiryModalContext();

  return (
    <Transition appear show={isOpenEnquiryModal} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10 cursor-pointer'
        onClose={onToogle}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black/25 backdrop-blur-md' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={'div'}
              // enter='ease-out duration-300'
              // enterFrom='opacity-0 scale-95'
              // enterTo='opacity-100 scale-100'
              // leave='ease-in duration-200'
              // leaveFrom='opacity-100 scale-100'
              // leaveTo='opacity-0 scale-95'
              className={classNames(
                // isOpenEnquiryModal === false
                //   ? 'animate__animated animate__fadeOutUpBig'
                //   : '',
                // 'animate__animated animate__fadeOutUpBig',
                'animate__animated animate__fadeInUpBig'
              )}>
              <DialogPanel className='w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all mt-20'>
                <div className={'w-full flex items-center justify-between'}>
                  <DialogTitle
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                    Let&apos;s Talk
                  </DialogTitle>
                  <button className={''} onClick={onToogle}>
                    ❌
                  </button>
                </div>
                <div className='mt-2'>
                  <EnquiryForm />
                </div>

                {/* <div className='mt-4 flex items-center justify-center w-full'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={onToogle}>
                    Send
                  </button>
                </div> */}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
