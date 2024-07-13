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

export const metadata:Metadata = {
  title: 'Consultero | Workshop',
  description: 'Join our premium workshop and upgrade your skills',
}

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
    <div className='bg-red-600 text-white py-16 px-8 font-sans'>
      <SectionWrapper>
        <div className='flex flex-col md:flex-row justify-between items-center gap-x-6 gap-y-8'>
          <div className='md:w-1/2 text-center md:text-left'>
            <h2 className='text-3xl font-semibold mb-4'>
              Unlock Your Potential
            </h2>
            <p className='text-base text-gray-100'>
              Upgrade your skills with our premium workshop. Enroll now and
              access exclusive content!
            </p>
          </div>

          <div className='md:w-1/2 flex justify-center'>
            <Link
              href='/enroll'
              className='bg-white text-red-500 py-3 px-6 font-semibold rounded-full shadow-lg hover:shadow-sm hover:text-white hover:bg-red-500 transition-all delay-150 duration-500 ease-in-out'>
              Enroll Now
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
