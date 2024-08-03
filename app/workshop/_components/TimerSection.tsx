import SectionWrapper from '@/app/_components/SectionWrapper';
import { BiTimer } from 'react-icons/bi';
import SectionSubHeading from './SectionSubHeading';
import TimerCard from './TimerCard';

export default function TimerSection() {
  return (
    <section>
      <div>
        <SectionWrapper>
          <div className='grid w-full grid-cols-1 justify-items-center gap-x-8'>
            <div className='col-span-full'>
              <SectionSubHeading
                iconLeft={<BiTimer className='fill-yellow' />}
                iconRight={<BiTimer className='fill-yellow' />}>
                Next Batch Starts In
              </SectionSubHeading>

              <TimerCard />
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
