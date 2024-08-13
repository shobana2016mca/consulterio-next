import SectionWrapper from '@/app/_components/SectionWrapper';
import { batchDetails } from '@/app/_constants';
import Image from 'next/image';
import { RiUserShared2Line } from 'react-icons/ri';
import SectionSubHeading from './SectionSubHeading';

export default function BatchScheduleSection() {
  return (
    <section>
      <SectionWrapper>
        <div className='relative max-w-4xl p-8 mx-auto rounded-lg shadow-lg bg-neutral-50'>
          <Image
            src='/batch_details.svg'
            alt='background'
            className='absolute inset-0 z-0 object-cover w-full h-full rounded-lg'
            fill
            sizes='(min-width: 640px) 640px, 100vw'
          />
          <div className='relative z-10 mb-6 text-center'>
            <SectionSubHeading
              iconLeft={<RiUserShared2Line className='fill-white' />}
              iconRight={<RiUserShared2Line className='fill-white' />}>
              Batch Schedule
            </SectionSubHeading>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='relative p-6 text-center transition duration-300 transform rounded-md shadow-md hover:shadow-lg hover:scale-105 bg-neutral-50 bg-opacity-60 backdrop-filter backdrop-blur-lg text-neutral-900'>
              <h2 className='mb-4 text-xl font-semibold'>Weekday Batch</h2>
              <p className='mb-2'>
                <span className='font-semibold'>Time:</span>{' '}
                {batchDetails.weekday.time}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Days:</span>{' '}
                {batchDetails.weekday.days}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Minimum Students:</span>{' '}
                {batchDetails.weekday.minStudents}
              </p>
              <p>
                <span className='font-semibold'>Maximum Students:</span>{' '}
                {batchDetails.weekday.maxStudents}
              </p>
            </div>
            <div className='relative p-6 text-center transition duration-300 transform rounded-md shadow-md hover:shadow-lg hover:scale-105 bg-neutral-50 bg-opacity-60 backdrop-filter backdrop-blur-lg text-neutral-900'>
              <h2 className='mb-4 text-xl font-semibold'>Weekend Batch</h2>
              <p className='mb-2'>
                <span className='font-semibold'>Time:</span>{' '}
                {batchDetails.weekend.time}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Days:</span>{' '}
                {batchDetails.weekend.days}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Minimum Students:</span>{' '}
                {batchDetails.weekend.minStudents}
              </p>
              <p>
                <span className='font-semibold'>Maximum Students:</span>{' '}
                {batchDetails.weekend.maxStudents}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
