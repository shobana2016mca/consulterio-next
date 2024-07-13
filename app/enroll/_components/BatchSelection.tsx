import FormError from '@/app/_components/FormError';
import { useFormContext } from 'react-hook-form';

const batches = [
  {
    id: 'weekday',
    name: 'Weekday',
    description: 'Monday to Friday 9:30pm to 10:30pm',
  },
  {
    id: 'weekend',
    name: 'Weekend',
    description: 'Saturday to Sunday 2:00pm to 4:30pm',
  },
];

function Example() {
  return (
    <fieldset>
      <legend className='sr-only'>Select Batch on your preference</legend>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        {batches.map((batch) => (
          <div
            key={batch.id}
            className='relative w-full flex items-start bg-slate-100 p-2 rounded-md shadow'>
            <div className='flex items-center h-5'>
              <input
                id={batch.id}
                aria-describedby={`${batch.id}-description`}
                name='plan'
                type='radio'
                defaultChecked={batch.id === 'small'}
                className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
              />
            </div>
            <div className='ml-3 text-sm'>
              <label htmlFor={batch.id} className='font-medium text-gray-700'>
                {batch.name}
              </label>
              <p id={`${batch.id}-description`} className='text-gray-500'>
                {batch.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default function BatchSelection() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<EnrollmentInputs>();

  return (
    <fieldset>
      <legend className='sr-onlyy text-sm font-medium mb-2'>
        Select Batch on your preference
      </legend>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        {batches.map((batch) => (
          <div
            key={batch.id}
            className='relative w-full flex items-start bg-slate-100 p-2 rounded-md shadow'>
            <div className='flex items-center h-5'>
              <input
                id={batch.id}
                aria-describedby={`${batch.id}-description`}
                //  name='plan'
                defaultValue={batch.id}
                type='radio'
                defaultChecked={batch.id === 'small'}
                className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                {...register('batch', { required: 'Please select a batch' })}
              />
            </div>
            <div className='ml-3 text-sm'>
              <label htmlFor={batch.id} className='font-medium text-gray-700'>
                {batch.name}
              </label>
              <p id={`${batch.id}-description`} className='text-gray-500'>
                {batch.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {errors.batch && <FormError error={errors.batch.message} />}
    </fieldset>
  );

  // return (
  //   <div className={'grid gap-y-2'}>
  //     <h3 className='font-bold'>Select a batch</h3>
  //     <div className={'grid grid-cols-1 lg:grid-cols-2 gap-y-4 md:gap-x-4'}>
  //       <div className={'col-span-full md:col-span-1'}>
  //         <input
  //           type='radio'
  //           id='weekdayBatch'
  //           value={'weekday'}
  //           checked={watch('batch') === 'weekday'}
  //           className='hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
  //           {...register('batch', {
  //             required: 'Please select a batch',
  //           })}
  //         />
  //         <label
  //           htmlFor='weekdayBatch'
  //           className='flex flex-row-reverse p-3 w-full bg-white border border-gray-200 rounded-md text-sm '>
  //           <span className='border border-gray-300  rounded-full mr-2 w-4 h-4 mt-0.5 ml-auto'></span>
  //           <h5 className='text-sm text-gray-500'>Weekday Batch (Mon-Fri)</h5>
  //         </label>
  //       </div>
  //       <div className={'col-span-full md:col-span-1'}>
  //         <input
  //           type='radio'
  //           id='weekendBatch'
  //           value={'weekend'}
  //           className='hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100'
  //           checked={watch('batch') === 'weekend'}
  //           {...register('batch', {
  //             required: 'Please select a batch',
  //           })}
  //         />
  //         <label
  //           htmlFor='weekendBatch'
  //           className='flex flex-row-reverse p-3 w-full bg-white border border-gray-200 rounded-md text-sm '>
  //           <span className='border border-gray-300  rounded-full mr-2 w-4 h-4 mt-0.5 ml-auto'></span>
  //           <h5 className='text-sm text-gray-500'>Weenend Batch (Sat-Sun)</h5>
  //         </label>
  //       </div>
  //     </div>
  //     {errors.batch && <FormError error={errors.batch.message} />}
  //   </div>
  // );
}
