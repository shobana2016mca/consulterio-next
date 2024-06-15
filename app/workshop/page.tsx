import BannerSection from './_components/BannerSection';
import BatchScheduleSection from './_components/BatchScheduleSection';
import CertificateSection from './_components/CertificateSection';
import CourseDetails from './_components/CourseDetails';
import EnrollSection from './_components/EnrollSection';
import FaqSection from './_components/FaqSection';
import TestimonialSection from './_components/TestimonialSection';
import TimerSection from './_components/TimerSection';

export default function WorkshopPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
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
