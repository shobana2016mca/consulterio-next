import FormError from '@/app/_components/FormError';
import { FormWrapper } from '@/app/_components/FormWrapper';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

export default function CheckOutForm() {
  return (
    <FormWrapper title='Check out'>
      <div
        className={
          'border rounded-lg p-4 bg-white flex flex-col gap-y-8 w-full my-8'
        }>
        <BatchSelection />

        <PriceTable />

        <PaymentLogo />
      </div>
    </FormWrapper>
  );
}

function PriceTable() {
  return (
    <div className={'w-full'}>
      <div className='overflow-x-clip bg-white w-full'>
        {/* <!-- Table --> */}
        <table className='min-w-full whitespace-nowrap text-left text-xs'>
          {/* <!-- Table head --> */}
          <thead className='border-b-2 bg-blue-50 uppercase tracking-wider'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Product
              </th>
              <th scope='col' className='px-6 py-3'>
                Price
              </th>
            </tr>
          </thead>

          {/* <!-- Table body --> */}
          <tbody>
            <tr className='border-b hover:bg-blue-100'>
              <th scope='row' className='px-6 py-3'>
                Interview Mastery Workshop x 1
              </th>
              <td className='px-6 py-3'>&#8377; 499.00</td>
            </tr>

            <tr className='border-b bg-blue-50 hover:bg-blue-100'>
              <th scope='row' className='px-6 py-3'>
                GST (18%) (incl.)
              </th>
              <td className='px-6 py-3'>&#8377; 76.12</td>
            </tr>
          </tbody>

          {/* <!-- Table footer --> */}
          <tfoot className='border-t-2'>
            <tr>
              <th className='px-6 py-3'>Total:</th>
              <td className='px-6 py-3'>&#8377; 499.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

function BatchSelection() {
  const {
    register,
    formState: { errors },
    getFieldState,
    getValues,
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

function PaymentLogo() {
  return (
    <>
      <div className={'relative aspect-[70/9] w-full h-full self-center'}>
        <Image
          src='https://cdn.razorpay.com/static/assets/logo/rzp_payment_icon.svg'
          alt='payment-logo'
          // width={176}
          // height={46}
          fill
          sizes='100% 100%'
          className='object-contain h-full w-full shadow-sm'
        />
      </div>
      <p className={'text-xs text-center'}>
        *Pay securely with Razorpay. We do not store your card or any other
        details.
      </p>
    </>
  );
}
