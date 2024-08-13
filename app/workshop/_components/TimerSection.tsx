import SectionWrapper from '@/app/_components/SectionWrapper';
import TimerCard from './TimerCard';

export default function TimerSection() {
  return (
    <section>
      <SectionWrapper>
        <div className='grid max-w-4xl grid-cols-1 mx-auto justify-items-center gap-x-8'>
          <div className='w-full col-span-full'>
            <TimerCard />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
