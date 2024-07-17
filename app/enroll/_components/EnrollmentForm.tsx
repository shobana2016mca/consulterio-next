'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { useMultistepForm } from '@/app/_hooks/useMultistepForm';
import { classNames } from '@/app/_lib/utils';

// Use batchDetails in your code
import { createOrder } from '@/app/_lib/payment.actions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CheckOutForm from './CheckOutForm';
import UserInfoForm from './UserInfoForm';

type BatchDetails = {
  weekday: {
    time: string;
    days: string;
    minStudents: number;
    maxStudents: number;
  };
  weekend: {
    time: string;
    days: string;
    minStudents: number;
    maxStudents: number;
  };
  duration: string;
  startDate: string;
  endDate: string;
  fees: number;
  discount: number;
  finalFees: number;
  registrationLink: string;
  [key: string]: any; // Add index signature
};
const batchDetails: BatchDetails = {
  weekday: {
    time: '9:30pm to 10:30pm',
    days: 'Monday to Friday',
    minStudents: 5,
    maxStudents: 30,
  },
  weekend: {
    time: '2:00pm to 4:30pm',
    days: 'Saturday to Sunday',
    minStudents: 5,
    maxStudents: 30,
  },
  duration: '3 months',
  startDate: '15th August 2022',
  endDate: '15th November 2022',
  fees: 999,
  discount: 400,
  finalFees: 499,
  registrationLink: '/enroll',
};

export default function EnrollmentForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const methods = useForm<EnrollmentInputs>({
    defaultValues: {
      fullName: 'John Doe',
      phone: '123-456-7890',
      email: 'someone@example.com',
    },
  });

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserInfoForm key={'user_info_form'} />,
      <CheckOutForm key={'check_out_form'} />,
    ]);

  const onSubmit: SubmitHandler<EnrollmentInputs> = async (
    data: EnrollmentInputs
  ) => {
    if (!isLastStep) return next();
    // console.log(data);

    const formData = new FormData();

    formData.append('fullName', data.fullName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('amount', String(batchDetails.finalFees));
    formData.append('batch', data.batch);
    // console.log(Object.fromEntries(formData.entries()));
    // call server action
    setIsLoading(true);
    const result = await createOrder(formData);
    // console.log(result);
    methods.reset();
    router.replace(result.short_url);
    setIsLoading(false);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={'grid gap-y-4'}>
          <ul className='grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1'>
            <li>
              <button
                type='button'
                className={classNames(
                  isFirstStep
                    ? 'bg-white text-indigo-500 rounded-lg shadow transition-colors duration-200 ease-in-out'
                    : 'text-gray-700',
                  'flex w-full justify-center py-4'
                )}
                // onClick={() => {
                //   !isFirstStep && back();
                // }}
              >
                User Details
              </button>
            </li>
            <li>
              <button
                type='button'
                className={classNames(
                  isLastStep
                    ? 'bg-white text-indigo-500 rounded-lg shadow transition-colors duration-200 ease-in-out'
                    : 'text-gray-700',
                  'flex w-full justify-center py-4'
                )}
                // onClick={next}
              >
                Check Out
              </button>
            </li>
          </ul>
        </div>
        {step}
        {/* {!isFirstStep && (
            <button
              type='button'
              onClick={back}
              className='rounded border-0 bg-blue-950 py-2 px-6 text-lg text-white hover:bg-blue-900 focus:outline-none'>
              Back
            </button>
          )} */}

        <div className={'w-full mt-4'}>
          <button
            type='submit'
            className='rounded w-full border-0 bg-blue-950 py-2 px-6 text-lg text-white hover:bg-blue-900 focus:outline-none'>
            {isLastStep ? (
              <>{isLoading ? 'Processing...' : 'Pay Fees & Register'}</>
            ) : (
              'Next Step'
            )}
            {/* {isLastStep ? 'Pay Fees & Register' : 'Next Step'} */}
          </button>
          {/* <EnrollmentSubmitButton isLastStep={isLastStep} /> */}
        </div>
      </form>
    </FormProvider>
  );
}

/* <ul className='grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1'>
        <li>
          <button
            className={classNames(
              active === 'pilot'
                ? 'bg-white text-indigo-500 rounded-lg shadow transition-colors duration-200 ease-in-out'
                : 'text-gray-700',
              'flex w-full justify-center py-4'
            )}
            onClick={() => handleActiveTab('pilot')}>
            Pilot Training
          </button>
        </li>
        <li>
          <button
            className={classNames(
              active === 'titan'
                ? 'bg-white text-indigo-500 rounded-lg shadow transition-colors duration-200 ease-in-out'
                : 'text-gray-700',
              'flex w-full justify-center py-4'
            )}
            // className='flex w-full justify-center py-4 bg-white rounded-lg shadow text-indigo-600'
            onClick={() => handleActiveTab('titan')}>
            Titan maintenance
          </button>
        </li>
        <li>
          <button
            className={classNames(
              active === 'load'
                ? 'bg-white text-indigo-500 rounded-lg shadow transition-colors duration-200 ease-in-out'
                : 'text-gray-700',
              'flex w-full justify-center py-4'
            )}
            // className='flex w-full justify-center py-4'
            onClick={() => handleActiveTab('load')}>
            Loadout
          </button>
        </li>
        <li>
          <button
            className={classNames(
              active === 'server'
                ? 'bg-white text-indigo-500 rounded-lg shadow transition-colors duration-200 ease-in-out'
                : 'text-gray-700',
              'flex w-full justify-center py-4'
            )}
            // className='flex w-full justify-center py-4'
            onClick={() => handleActiveTab('server')}>
            Server Browser
          </button>
        </li>
        <li>
          <button
            className={classNames(
              active === 'setting'
                ? 'bg-white text-indigo-500 rounded-lg shadow transition-colors duration-200 ease-in-out'
                : 'text-gray-700',
              'flex w-full justify-center py-4'
            )}
            // className='flex w-full justify-center py-4'
            onClick={() => handleActiveTab('setting')}>
            Settings
          </button>
        </li>
      </ul> */

/* <div>
        <div className='grid grid-cols-3 gap-5'>
          <button
            // className='p-4 rounded shadow-md text-white bg-indigo-500'
            className={classNames(
              selected === 'home'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-indigo-500',
              'p-4 rounded shadow-md'
            )}
            onClick={() => handleSelectedTab('home')}>
            Home
          </button>
          <button
            className={classNames(
              selected === 'profile'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-indigo-500',
              'p-4 rounded shadow-md'
            )}
            onClick={() => handleSelectedTab('profile')}>
            Profile
          </button>
          <button
            className={classNames(
              selected === 'message'
                ? 'bg-indigo-500 text-white'
                : 'bg-white text-indigo-500',
              'p-4 rounded shadow-md'
            )}
            onClick={() => handleSelectedTab('message')}>
            Messages
          </button>
        </div>
        {selected === 'home' && (
          <div className='shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6'>
            Im in the {selected} tab
          </div>
        )}

        {selected === 'profile' && (
          <div className='shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6'>
            Im in the {selected} tab
          </div>
        )}

        {selected === 'message' && (
          <div className='shadow-xl border border-gray-100 font-light p-8 rounded text-gray-500 bg-white mt-6'>
            Im in the {selected} tab
          </div>
        )}
      </div> */
