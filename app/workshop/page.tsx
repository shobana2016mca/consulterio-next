import BannerSection from './_components/BannerSection';
import BatchScheduleSection from './_components/BatchScheduleSection';
import CertificateSection from './_components/CertificateSection';
import CourseDetails from './_components/CourseDetails';

import { Metadata } from 'next';
import EnrollSection from './_components/EnrollSection';
import FaqSection from './_components/FaqSection';
import TermsAndConditionCard from './_components/TermsAndConditionCard';
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

      {/* BATCH */}
      <BatchScheduleSection />

      {/* TERMS AND CONDITION */}
      <TermsAndConditionCard />

      {/* ENROLL */}
      <EnrollSection />
    </main>
  );
}
