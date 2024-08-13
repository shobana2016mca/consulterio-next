import FormError from '@/app/_components/FormError';
import { FormWrapper } from '@/app/_components/FormWrapper';
import { useFormContext } from 'react-hook-form';

export default function UserInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<EnrollmentInputs>();

  return (
    <FormWrapper title='User Details'>
      <div className='grid flex-col w-full p-8 bg-white border rounded-lg gap-y-4'>
        <h2 className='mb-1 text-lg font-medium text-gray-900 title-font'>
          Unlock Your Potential
        </h2>
        <p className='text-sm leading-relaxed text-gray-600'>
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
            className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
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
            placeholder='Ex: 1234567890'
            className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{3}[0-9]{3}[0-9]{4}$/,
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
            className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
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
