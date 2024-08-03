import { batchDetails } from '@/app/_constants';
import Link from 'next/link';

export default function BatchDetailsCard() {
  return (
    <div className='grid p-4 m-4 rounded-md shadow-lg md:grid-cols-3 lg:grid-cols-1 gap-y-4 lg:m-0'>
      <h3 className='font-bold'>
        <span className={'block'}>Duration</span>
        <span className={'block font-semibold'}>{batchDetails.duration}</span>
      </h3>

      <h3 className='font-bold'>
        <span className={'block'}>Start Date</span>
        <span className={'block font-semibold'}>{batchDetails.startDate}</span>
      </h3>

      <h3 className='font-bold'>
        <span className={'block'}>End Date</span>
        <span className={'block font-semibold'}>{batchDetails.endDate}</span>
      </h3>

      <h3 className='font-bold'>
        <span className={'block'}>Fees:</span>
        <span className={'block font-semibold'}>₹{batchDetails.fees}</span>
      </h3>

      <h3 className='font-bold'>
        <span className={'block'}>Discount:</span>
        <span className={'block font-semibold'}>₹{batchDetails.discount}</span>
      </h3>

      <h3 className='font-bold'>
        <span className={'block'}>Final Fees:</span>
        <span className={'block font-semibold'}>₹{batchDetails.finalFees}</span>
      </h3>

      <Link
        href={batchDetails.registrationLink}
        // target='_blank'
        rel='noopener noreferrer'
        className='px-4 py-2 font-medium text-center text-white transition-all duration-500 ease-in-out delay-150 bg-red-600 rounded-full shadow-lg col-span-full hover:shadow-sm hover:bg-red-500'>
        Register Now
      </Link>
    </div>
  );
}
