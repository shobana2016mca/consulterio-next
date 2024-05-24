import { services } from '@/constants';
import ServiceCard from './ServiceCard';

export default function ServiceSection() {
  return (
    <section>
      <div className='mt-8'>
        <div className='space-y-12'>
          <div className='flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto max-w-[510px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  Our Services
                </span>
                <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]'>
                  What We Offer
                </h2>
                <p className='text-base text-body-color'>
                  At Consultero, we offer a comprehensive suite of recruitment
                  services designed to meet your unique hiring needs. Our
                  dedicated team ensures a smooth and efficient process from
                  start to finish, providing you with the best candidates for
                  your organization.
                </p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-3 p-8 gap-8 justify-items-center'>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                details={service.details}
                icon={<service.icon />}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
