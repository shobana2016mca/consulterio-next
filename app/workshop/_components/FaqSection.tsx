import SectionWrapper from '@/app/_components/SectionWrapper';
import { faqs } from '@/app/_constants';
import { FaQuestion } from 'react-icons/fa6';
import Accordion from './Accordion';
import SectionSubHeading from './SectionSubHeading';

export default function FaqSection() {
  return (
    <section>
      <SectionWrapper>
        <div className='w-full max-w-5xl px-4 mx-auto md:px-6'>
          <SectionSubHeading
            iconLeft={<FaQuestion className='fill-yellow' />}
            iconRight={<FaQuestion className='fill-yellow' />}>
            Most Common FAQ&rsquo;s
          </SectionSubHeading>

          <div className='divide-y divide-slate-200'>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                question={faq.question}
                id={`faqs-${index}`}
                active={faq.active}>
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
