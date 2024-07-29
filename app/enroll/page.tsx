import SectionWrapper from '@/app/_components/SectionWrapper';
import { workshopBenefits } from '@/app/_constants';
import { Metadata } from 'next';
import { FaCertificate } from 'react-icons/fa6';
import EnrollmentForm from './_components/EnrollmentForm';

export const metadata: Metadata = {
  title: 'Consultero | Enrollment',
  description: 'Enroll in our Interview Mastery workshop',
};

export default function EnrollmentPage() {
  return (
    <main>
      <Banner />

      <section className={'my-8 lg:my-16'}>
        <SectionWrapper>
          <div className={'grid grid-cols-2 gap-4 w-full'}>
            <div className={'col-span-full md:col-span-1 grid content-center'}>
              <div className={'p-4'}>
                <h2 className={'text-2xl font-bold mb-4'}>
                  Workshop Benefits and Bonuses
                </h2>
                <p className={'text-lg mb-4'}>
                  Invest in your future with our Interview Mastery workshop and
                  gain a competitive edge in the job market! Here&lsquo;s what
                  you get when you join:
                </p>
                <ul className={''}>
                  {workshopBenefits.map((benefit) => (
                    <li key={benefit.id}>
                      <h3
                        className={
                          'font-bold inline-flex items-center gap-x-2'
                        }>
                        <span>
                          <FaCertificate className={'fill-blue-800'} />
                        </span>
                        <span>{benefit.title}</span>
                      </h3>
                      <p>{benefit.description}</p>
                    </li>
                  ))}
                </ul>
                <p className={'text-lg mt-4'}>
                  Don&lsquo;t miss out on these valuable bonuses and the
                  opportunity to advance your career! Secure your spot today.
                </p>
              </div>
            </div>

            <div className={'col-span-full md:col-span-1'}>
              <EnrollmentForm />
            </div>
          </div>
        </SectionWrapper>
      </section>
    </main>
  );
}

function Banner() {
  return (
    <section className='bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans'>
      <SectionWrapper>
        <div className='grid gap-y-4 items-center content-center text-center aspect-square sm:aspect-[20/9] md:aspect-[24/9] lg:aspect-[26/9] h-full w-full'>
          <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4'>
            Congrats! You are just one step away from becoming an Interview
            Mastery workshop
          </h2>
          <p className='text-white text-sm md:text-xl lg:text-2xl font-semibold animate-pulse text-center'>
            Enroll now to get started with the course and become an expert and
            crack the interviews.
          </p>
        </div>
      </SectionWrapper>
    </section>
  );
}
