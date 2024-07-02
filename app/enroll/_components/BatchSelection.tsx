import FormError from '@/app/_components/FormError';
import { useFormContext } from 'react-hook-form';

export default function BatchSelection() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<EnrollmentInputs>();

  return (
    <div className={'grid gap-y-2'}>
      <h3 className='font-bold'>Select a batch</h3>
      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-y-4 md:gap-x-4'}>
        <div className={'col-span-full md:col-span-1'}>
          <input
            type='radio'
            id='weekdayBatch'
            value={'weekday'}
            checked={watch('batch') === 'weekday'}
            className='hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
            {...register('batch', {
              required: 'Please select a batch',
            })}
          />
          <label
            htmlFor='weekdayBatch'
            className='flex flex-row-reverse p-3 w-full bg-white border border-gray-200 rounded-md text-sm '>
            <span className='border border-gray-300  rounded-full mr-2 w-4 h-4 mt-0.5 ml-auto'></span>
            <h5 className='text-sm text-gray-500'>Weekday Batch (Mon-Fri)</h5>
          </label>
        </div>
        <div className={'col-span-full md:col-span-1'}>
          <input
            type='radio'
            id='weekendBatch'
            value={'weekend'}
            className='hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
            checked={watch('batch') === 'weekend'}
            {...register('batch', {
              required: 'Please select a batch',
            })}
          />
          <label
            htmlFor='weekendBatch'
            className='flex flex-row-reverse p-3 w-full bg-white border border-gray-200 rounded-md text-sm '>
            <span className='border border-gray-300  rounded-full mr-2 w-4 h-4 mt-0.5 ml-auto'></span>
            <h5 className='text-sm text-gray-500'>Weenend Batch (Sat-Sun)</h5>
          </label>
        </div>
      </div>
      {errors.batch && <FormError error={errors.batch.message} />}
    </div>
  );
}
