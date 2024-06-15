import SectionWrapper from '@/components/SectionWrapper';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';
import SectionSubHeading from './SectionSubHeading';
import TestimonialCard from './TestimonialCard';

export default function TestimonialSection() {
  return (
    <section>
      <SectionWrapper>
        <div className={'px-4'}>
          <SectionSubHeading
            iconLeft={<FaQuoteLeft className='fill-yellow' />}
            iconRight={<FaQuoteRight className='fill-yellow' />}>
            What Our Student&rsquo;s Say
          </SectionSubHeading>

          <TestimonialCard />
        </div>
      </SectionWrapper>
    </section>
  );
}
