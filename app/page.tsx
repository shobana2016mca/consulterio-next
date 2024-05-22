import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import FeatureSection from '@/components/FeatureSection';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import Video from '@/components/video';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center bg-white'>
        <HeroSection />
        <FeatureSection />
        <AboutSection />
        <ServicesSection />
        <Video />
        <TestimonialSection />
        <CTASection />
      </div>
    </main>
  );
}
