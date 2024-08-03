import SectionHeading from '@/app/_components/SectionHeading';
import SectionWrapper from '@/app/_components/SectionWrapper';
import { services } from '@/app/_constants';
import ServiceCard from '../../_components/ServiceCard';

export default function ServiceSection() {
  return (
    <section className={'mt-8'}>
      {/* <div className='mt-8'>
        <div className='space-y-12'>
          <div className='flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto max-w-[510px] text-center'>
                <span className='block mb-2 text-lg font-semibold text-primary'>
                  Our Services
                </span>
                <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]'>
                  What We Offer
                </h2>
                <p className='text-sm font-normal leading-5 text-center text-gray-500 md:text-lg lg:text-xl md:leading-6 lg:leading-8'>
                  At Consultero, we offer a comprehensive suite of recruitment
                  services designed to meet your unique hiring needs. Our
                  dedicated team ensures a smooth and efficient process from
                  start to finish, providing you with the best candidates for
                  your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <SectionWrapper>
        <span className='block mb-2 text-lg font-semibold text-center text-primary'>
          Our Services
        </span>
        <div className={'space-y-4 md:space-y-6 lg:space-y-8'}>
          <SectionHeading center>What We Offer</SectionHeading>
          <p className='text-sm font-normal leading-5 text-center text-gray-500 md:text-lg lg:text-xl md:leading-6 lg:leading-8'>
            At Consultero, we offer a comprehensive suite of recruitment
            services designed to meet your unique hiring needs. Our dedicated
            team ensures a smooth and efficient process from start to finish,
            providing you with the best candidates for your organization.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className='grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 xl:grid-cols-3 justify-items-center'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              details={service.details}
              icon={
                <service.icon className='text-white size-4 md:size-6 lg:size-10' />
              }
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
