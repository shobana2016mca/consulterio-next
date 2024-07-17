import EnquiryModalContextProvider from '@/app/_contexts/EnquiryFormModalContext';
import SectionHeading from './SectionHeading';
import SectionWrapper from './SectionWrapper';
import ServiceSectionCard from './ServiceSectionCard';

export default function ServicesSection() {
  return (
    <section className=''>
      <SectionWrapper>
        <div className='space-y-4 md:space-y-6 lg:space-y-8'>
          <SectionHeading center>
            Key Job Roles In Various Departments.
          </SectionHeading>
          <p className='font-normal text-sm md:text-lg lg:text-xl leading-5 md:leading-6 lg:leading-8 text-gray-500 text-center'>
            Beyond technical roles, both SAS companies and product software
            companies have a variety of important positions across other
            departments.
          </p>
        </div>
        <EnquiryModalContextProvider>
          <ServiceSectionCard />
        </EnquiryModalContextProvider>
      </SectionWrapper>
    </section>
  );
}
