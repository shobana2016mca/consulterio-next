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
          <p className='text-sm font-normal leading-5 text-center text-gray-500 md:text-lg lg:text-xl md:leading-6 lg:leading-8'>
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
