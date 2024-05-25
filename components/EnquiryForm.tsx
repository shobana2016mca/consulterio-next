'use client';

import { ChatIcon } from '@/assets/icons';
import { useEnquiryModalContext } from '@/contexts/EnquiryFormModalContext';
import { createEnquiry } from '@/lib/enquiry.actions';
import { EnquiryFormInputType } from '@/types';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import FormError from './FormError';

export default function EnquiryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { onToogle } = useEnquiryModalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormInputType>({
    // defaultValues: {
    //   fullName: 'jhon doe',
    //   companyName: 'xyz company',
    //   email: 'jhondoe123@gmail.com',
    //   phoneNo: '9999911111',
    // },
  });

  const onSubmit: SubmitHandler<EnquiryFormInputType> = async (
    data: EnquiryFormInputType
  ) => {
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('companyName', data.companyName);
    formData.append('email', data.email);
    formData.append('phoneNo', data.phoneNo);

    // console.log(Object.fromEntries(formData.entries()));

    try {
      setIsLoading(true);
      const result = await createEnquiry(formData);
      if (result.status === 'success') {
        toast.success(result.message, {
          duration: 4000,
          icon: '✅',
          position: 'bottom-right',
        });
      } else {
        toast.error('Failed to send message. Please try again.', {
          duration: 4000,
          icon: '❌',
          position: 'bottom-right',
        });
      }
    } catch (err) {
      toast.error('Somthing went wrong. Please try again.', {
        duration: 4000,
        icon: '❌',
        position: 'bottom-right',
      });
    } finally {
      setIsLoading(false);
    }
    reset();
    onToogle();
  };

  return (
    <div className='bg-gray-800 rounded-3xl lg:col-span-2 p-10 max-sm:px-6 flex flex-col justify-center max-md:mt-12'>
      <h2 className='text-2xl text-blue-500 font-bold'>
        Product or Service Inquiry
      </h2>
      <p className='text-sm text-gray-400 mt-4'>
        Have some big idea or brand to develop and need help? Then reach out
        we&apos;d love to hear about your project and provide help.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='space-y-4 mt-8'>
          <div>
            <label htmlFor='fullName' className='sr-only'>
              Full Name
            </label>
            <input
              type='text'
              id='fullName'
              placeholder='Full Name'
              className='px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none'
              {...register('fullName', {
                required: 'This field is required',
              })}
            />
            {errors.fullName && <FormError error={errors.fullName.message} />}
          </div>

          <div>
            <label htmlFor='companyName' className={'sr-only'}>
              Company Name
            </label>
            <input
              type='text'
              id='companyName'
              placeholder='Company Name'
              className='px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none'
              {...register('companyName', {
                required: 'This field is required',
              })}
            />
            {errors.companyName && (
              <FormError error={errors.companyName.message} />
            )}
          </div>

          <div>
            <label htmlFor='email' className={'sr-only'}>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Email'
              className='px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none'
              autoComplete='email'
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <FormError error={errors.email.message} />}
          </div>

          <div>
            <label htmlFor='phoneNo' className={'sr-only'}>
              Phone No.
            </label>
            <input
              type='tel'
              id='phoneNo'
              placeholder='Phone No.'
              className='px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none'
              autoComplete='tel'
              {...register('phoneNo', {
                required: 'This field is required',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Invalid phone number',
                },
              })}
            />
            {errors.phoneNo && <FormError error={errors.phoneNo.message} />}
          </div>

          {/* <textarea
            placeholder='Write Message'
            className='px-2 pt-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none'></textarea> */}
        </div>
        <button
          type='submit'
          disabled={isLoading}
          className='mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-blue-600 text-white hover:bg-blue-700'>
          {<ChatIcon className='mr-2' />}
          {isLoading ? 'Sending...' : 'Send Message'}
          {/* Send Message */}
        </button>
      </form>
    </div>
  );
}
