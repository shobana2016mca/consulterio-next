import { FormWrapper } from '@/components/FormWrapper';
import Image from 'next/image';

export default function CheckOutForm() {
  return (
    <FormWrapper title='Check out'>
      <div className={'p-8 w-full'}>
        <div className='overflow-x-auto bg-white w-full'>
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
                <td className='px-6 py-3'>&#8377; 5000.00</td>
              </tr>

              <tr className='border-b bg-blue-50 hover:bg-blue-100'>
                <th scope='row' className='px-6 py-3'>
                  GST (18%)
                </th>
                <td className='px-6 py-3'>&#8377; 17.90</td>
              </tr>
            </tbody>

            {/* <!-- Table footer --> */}
            <tfoot className='border-t-2'>
              <tr>
                <th className='px-6 py-3'>Total:</th>
                <td className='px-6 py-3'>&#8377;772.43</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className={'aspect-[10/1] space-y-4'}>
        <Image
          src='https://cdn.razorpay.com/static/assets/logo/rzp_payment_icon.svg'
          alt='payment-logo'
          width={176}
          height={46}
          className='object-contain h-full w-full'
        />
        <p className={'text-xs text-center'}>
          Pay securely with Razorpay. We do not store your card or any other
          details.
        </p>
      </div>
    </FormWrapper>
  );
}
