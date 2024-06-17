'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { useMultistepForm } from '@/app/hooks/useMultistepForm';
import { classNames } from '@/lib/utils';

import { EnrollmentInputs } from '@/types';
import CheckOutForm from './CheckOutForm';
import UserInfoForm from './UserInfoForm';

export default function EnrollmentForm() {
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

  const onSubmit: SubmitHandler<EnrollmentInputs> = (
    data: EnrollmentInputs
  ) => {
    console.log(data);
    if (!isLastStep) return next();

    methods.reset();
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
                onClick={() => {
                  !isFirstStep && back();
                }}>
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
                onClick={next}>
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
            {isLastStep ? 'Pay Fees & Register' : 'Next Step'}
          </button>
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
