import SectionWrapper from '@/components/SectionWrapper';
import { workshopBenefits } from '@/constants';
import { FaCertificate } from 'react-icons/fa6';
import EnrollmentForm from './_components/EnrollmentForm';

export default function EnrollmentPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
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
        <div className='grid gap-y-4 items-center text-center px-4 py-12'>
          <h2 className='text-white text-2xl lg:text-3xl font-bold mb-4'>
            Congrats! You are just one step away from becoming an Interview
            Mastery workshop
          </h2>
          <p className='text-white text-lg text-center'>
            Enroll now to get started with the course and become an expert and
            crack the interviews.
          </p>
        </div>
      </SectionWrapper>
    </section>
  );
}
