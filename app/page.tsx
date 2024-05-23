import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import FeatureSection from '@/components/FeatureSection';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import Video from '@/components/video';
import { updateUser } from '@/lib/user.actions';
import { currentUser } from '@clerk/nextjs/server';

export default async function Home() {
  const user = await currentUser();

  if (user) {
    await updateUser(user);
  }

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
