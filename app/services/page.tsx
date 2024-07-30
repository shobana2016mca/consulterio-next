import OurApproachSection from '@/app/services/_components/OurApproachSection';
import ServiceSection from '@/app/services/_components/ServiceSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultero | Services',
  description: 'Our services',
};

function ServicesPage() {
  return (
    <main className={'space-y-8 mb-20'}>
      <ServiceSection />
      <OurApproachSection />
    </main>
  );
}

export default ServicesPage;
