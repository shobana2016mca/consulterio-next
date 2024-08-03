'use client';

import { createContact } from '@/app/_lib/contact.actions';
import { useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import FormError from '../../_components/FormError';

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInputType>({
    // defaultValues: {
    //   fullName: 'jhone doe',
    //   email: 'jhondoe123@gmail.com',
    //   phoneNo: '9999911111',
    //   communicationMethod: 'email',
    //   message:
    //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consequuntur corporis fugiat sit consectetur, reiciendis optio nisi vel officia commodi, voluptatum atque in labore provident accusamus magni porro beatae ratione!',
    // },
  });

  const onSubmit: SubmitHandler<ContactInputType> = async (
    data: ContactInputType
  ) => {
    // console.log(data);

    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('email', data.email);
    formData.append('phoneNo', data.phoneNo);
    formData.append('communicationMethod', data.communicationMethod);
    formData.append('message', data.message);

    // console.log(Object.fromEntries(formData.entries()));

    startTransition(async () => {
      const result = await createContact(formData);
      if (result.status === 'success') {
        toast.success(result.message);
      } else if (result.status === 'fail') {
        toast(result.message);
      } else {
        toast.error('Failed to send your query.');
      }
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'grid gap-y-6'}>
      <div className={'flex flex-col gap-y-2'}>
        <input
          type='text'
          className='w-full h-12 pl-4 text-lg font-normal leading-7 text-gray-600 placeholder-gray-400 bg-transparent border border-gray-200 rounded-full shadow-sm focus:outline-none'
          placeholder='Full name'
          autoComplete='given-name'
          {...register('fullName', {
            required: 'This field is required',
          })}
        />

        {errors.fullName && <FormError error={errors.fullName.message} />}
      </div>

      <div className={'flex flex-col gap-y-2'}>
        <input
          type='email'
          className='w-full h-12 pl-4 text-lg font-normal leading-7 text-gray-600 placeholder-gray-400 bg-transparent border border-gray-200 rounded-full shadow-sm focus:outline-none'
          placeholder='Email'
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

      <div className={'flex flex-col gap-y-2'}>
        <input
          type='tel'
          className='w-full h-12 pl-4 text-lg font-normal leading-7 text-gray-600 placeholder-gray-400 bg-transparent border border-gray-200 rounded-full shadow-sm focus:outline-none'
          placeholder='Phone'
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

      <div>
        <div className='p-4'>
          <h4 className='text-lg font-normal leading-7 text-gray-500'>
            Preferred method of communication
          </h4>
          <fieldset className='space-y-4'>
            <legend className={'sr-only'}>You can choose any one</legend>

            <input
              id='email'
              value={'email'}
              className='mr-2 peer/email'
              type='radio'
              {...register('communicationMethod', {
                required: 'This field is required',
              })}
            />
            <label
              htmlFor='email'
              className='mr-4 peer-checked/email:text-sky-500'>
              Email
            </label>

            <input
              id='phone'
              value={'phone'}
              className='mr-2 peer/phone'
              type='radio'
              {...register('communicationMethod', {
                required: 'This field is required',
              })}
            />
            <label htmlFor='phone' className='peer-checked/phone:text-sky-500'>
              Phone
            </label>

            <div className='hidden text-sm peer-checked/email:block'>
              You choose email option.
            </div>
            <div className='hidden text-sm peer-checked/phone:block'>
              You choose phone option.
            </div>
          </fieldset>
        </div>
        {errors.communicationMethod && (
          <FormError error={errors.communicationMethod.message} />
        )}
      </div>

      <div className={'flex flex-col gap-y-2'}>
        <textarea
          className='w-full p-2 text-base font-normal leading-tight text-gray-600 placeholder-gray-400 bg-transparent border border-gray-200 rounded-md shadow-sm resize-y focus:outline-none'
          rows={6}
          placeholder='Message'
          {...register('message', {
            required: 'This field is required',
          })}></textarea>
        {errors.message && <FormError error={errors.message.message} />}
      </div>

      <button
        disabled={isPending}
        className='w-full h-12 text-base font-semibold leading-6 text-white transition-all duration-700 bg-indigo-600 rounded-full shadow-sm hover:bg-indigo-800 disabled:bg-blue-900 disabled:cursor-not-allowed'>
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
