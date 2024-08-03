import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import 'animate.css';
import { Fragment } from 'react';

import { MapPinIcon, MessageIcon, PhoneIcon } from '@/app/_assets/icons';
import { useEnquiryModalContext } from '@/app/_contexts/EnquiryFormModalContext';
import { classNames } from '@/app/_lib/utils';
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
          <div className='flex items-center justify-center min-h-full p-4 text-center'>
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
              <DialogPanel className='w-full max-w-5xl p-6 mt-20 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
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
                  <div className='grid items-center max-w-6xl py-6 mx-auto bg-white md:grid-cols-2 lg:grid-cols-3 font-manrope'>
                    <div>
                      <h2 className='text-[#333] text-xl font-semibold'>
                        Enquiry Form
                      </h2>
                      <div className='px-4 mt-8 space-y-10'>
                        <div className='flex'>
                          <div className='w-8 h-8 flex items-center shrink-0 rounded border p-1.5'>
                            {<MessageIcon className='w-full' />}
                          </div>
                          <div className='ml-4'>
                            <h4 className='text-[#333] text-base font-semibold'>
                              Chat to us
                            </h4>
                            <p className='text-xs'>
                              Chat with our team to help.
                            </p>
                            <p className='mt-4 text-sm font-semibold'>
                              macmillanhr@gmail.com
                            </p>
                          </div>
                        </div>
                        <div className='flex'>
                          <div className='w-8 h-8 flex items-center shrink-0 rounded border p-1.5'>
                            {<MapPinIcon className='w-full' />}
                          </div>
                          <div className='ml-4'>
                            <h4 className='text-[#333] text-base font-semibold'>
                              Visit us
                            </h4>
                            <p className='text-xs'>Visit our office HQ.</p>
                            <p className='mt-4 text-sm font-semibold'>
                              chennai
                            </p>
                          </div>
                        </div>
                        <div className='flex'>
                          <div className='w-8 h-8 flex items-center shrink-0 rounded border p-1.5'>
                            {<PhoneIcon className='w-full' />}
                          </div>
                          <div className='ml-4'>
                            <h4 className='text-[#333] text-base font-semibold'>
                              Call us
                            </h4>
                            <p className='text-xs'>Monday to Friday.</p>
                            <p className='mt-4 text-sm font-semibold'>
                              +91-7397022565
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Form */}
                    <EnquiryForm />
                  </div>
                </div>

                {/* <div className='flex items-center justify-center w-full mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
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
