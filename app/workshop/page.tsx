import SectionWrapper from '@/app/_components/SectionWrapper';
import Link from 'next/link';
import BannerSection from './_components/BannerSection';
import BatchScheduleSection from './_components/BatchScheduleSection';
import CertificateSection from './_components/CertificateSection';
import CourseDetails from './_components/CourseDetails';

import { Metadata } from 'next';
import FaqSection from './_components/FaqSection';
import TestimonialSection from './_components/TestimonialSection';
import TimerSection from './_components/TimerSection';

export const metadata: Metadata = {
  title: 'Consultero | Workshop',
  description: 'Join our premium workshop and upgrade your skills',
};

export default function WorkshopPage() {
  return (
    <main className={'space-y-16'}>
      {/* Banner */}
      <BannerSection />

      {/* COURSE DETAILS */}
      <CourseDetails />

      {/* CERTIFICATE */}
      <CertificateSection />

      {/* TESTIMONIAL */}
      <TestimonialSection />

      {/* FAQ */}
      <FaqSection />

      {/* TIMER */}
      <TimerSection />

      {/* BATCHE */}
      <BatchScheduleSection />

      {/* ENROLL */}
      <EnrollSection />
    </main>
  );
}

function EnrollSection() {
  return (
    <div className='px-8 py-16 font-sans text-white bg-red-600'>
      <SectionWrapper>
        <div className='flex flex-col items-center justify-between md:flex-row gap-x-6 gap-y-8'>
          <div className='text-center md:w-1/2 md:text-left'>
            <h2 className='mb-4 text-3xl font-semibold'>
              Unlock Your Potential
            </h2>
            <p className='text-base text-gray-100'>
              Upgrade your skills with our premium workshop. Enroll now and
              access exclusive content!
            </p>
          </div>

          <div className='flex justify-center md:w-1/2'>
            <Link
              href='/enroll'
              className='px-6 py-3 font-semibold text-red-500 transition-all duration-500 ease-in-out delay-150 bg-white rounded-full shadow-lg hover:shadow-sm hover:text-white hover:bg-red-500'>
              Enroll Now
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
