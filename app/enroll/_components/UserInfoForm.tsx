import FormError from '@/components/FormError';
import { FormWrapper } from '@/components/FormWrapper';
import { EnrollmentInputs } from '@/types';
import { useFormContext } from 'react-hook-form';

export default function UserInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<EnrollmentInputs>();

  return (
    <FormWrapper title='User Details'>
      <div className='grid gap-y-4 w-full flex-col border rounded-lg bg-white p-8'>
        <h2 className='title-font mb-1 text-lg font-medium text-gray-900'>
          Unlock Your Potential
        </h2>
        <p className='leading-relaxed text-gray-600 text-sm'>
          This is your chance to invest in yourself and take your career to the
          next level. Secure your spot today and get ready to ace your next job
          interview!
        </p>
        <div className=''>
          <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
            Full Name
          </label>
          <input
            type='text'
            id='fullName'
            autoComplete='name'
            placeholder='Ex: John Doe'
            className='w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
            {...register('fullName', { required: 'Full name is required' })}
          />
          {errors.fullName && <FormError error={errors.fullName.message} />}
        </div>
        <div className=''>
          <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
            Phone
          </label>
          <input
            type='tel'
            id='phone'
            autoComplete='tel-country-code'
            placeholder='Ex: 123-456-7890'
            className='w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^\d{3}-\d{3}-\d{4}$/,
                message: 'Invalid phone number',
              },
            })}
          />
          {errors.phone && <FormError error={errors.phone.message} />}
        </div>
        <div className=''>
          <label htmlFor='email' className='text-sm leading-7 text-gray-600'>
            Email
          </label>
          <input
            type='email'
            id='email'
            autoComplete='email'
            placeholder='Ex: someone@example.com'
            className='w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <FormError error={errors.email.message} />}
        </div>

        <p className='mt-3 text-xs text-gray-500'>
          Secure and private. We will never share your information.
        </p>
      </div>
    </FormWrapper>
  );
}
