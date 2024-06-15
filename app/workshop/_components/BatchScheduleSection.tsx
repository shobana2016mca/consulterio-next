import SectionWrapper from '@/components/SectionWrapper';
import { batchDetails } from '@/constants';
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

        <div className='mt-4 grid grid-cols-1 justify-items-center content-center gap-4 md:grid-cols-2 p-4'>
          <div className='space-y-2'>
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
          <div className='space-y-2'>
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
