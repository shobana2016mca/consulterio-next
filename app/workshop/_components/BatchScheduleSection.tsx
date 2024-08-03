import SectionWrapper from '@/app/_components/SectionWrapper';
import { batchDetails } from '@/app/_constants';
import { RiUserShared2Line } from 'react-icons/ri';
import SectionSubHeading from './SectionSubHeading';
import TermsAndConditionCard from './TermsAndConditionCard';

export default function BatchScheduleSection() {
  return (
    <section>
      <SectionWrapper>
        <SectionSubHeading
          iconLeft={<RiUserShared2Line className='fill-yellow' />}
          iconRight={<RiUserShared2Line className='fill-yellow' />}>
          Batch Schedule
        </SectionSubHeading>

        <div className='grid content-center max-w-2xl grid-cols-1 gap-4 p-4 mx-auto mt-4 justify-items-center md:grid-cols-2'>
          <div className='w-full space-y-2 text-center col-span-full md:col-span-1'>
            <h3 className='font-bold'>Weekday Batch</h3>
            <p>
              <span className='font-semibold'>Time:</span>{' '}
              {batchDetails.weekday.time}
            </p>
            <p>
              <span className='font-semibold'>Days:</span>{' '}
              {batchDetails.weekday.days}
            </p>
            <p>
              <span className='font-semibold'>Minimum Students:</span>{' '}
              {batchDetails.weekday.minStudents}
            </p>
            <p>
              <span className='font-semibold'>Maximum Students:</span>{' '}
              {batchDetails.weekday.maxStudents}
            </p>
          </div>
          <div className='w-full space-y-2 text-center col-span-full md:col-span-1'>
            <h3 className='font-bold'>Weekend Batch</h3>
            <p>
              <span className='font-semibold'>Time:</span>{' '}
              {batchDetails.weekend.time}
            </p>
            <p>
              <span className='font-semibold'>Days:</span>{' '}
              {batchDetails.weekend.days}
            </p>
            <p>
              <span className='font-semibold'>Minimum Students:</span>{' '}
              {batchDetails.weekend.minStudents}
            </p>
            <p>
              <span className='font-semibold'>Maximum Students:</span>{' '}
              {batchDetails.weekend.maxStudents}
            </p>
          </div>
        </div>

        <TermsAndConditionCard />
      </SectionWrapper>
    </section>
  );
}
