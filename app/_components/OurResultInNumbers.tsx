import ResultInNumberCard from './ResultInNumberCard';
import SectionWrapper from './SectionWrapper';

export default function OurResultInNumbers() {
  return (
    <section className=''>
      <SectionWrapper>
        <h2 className='font-manrope text-4xl text-center text-gray-900 font-bold mb-14'>
          Our results in numbers
        </h2>
        <ResultInNumberCard />
      </SectionWrapper>
    </section>
  );
}
