import AboutSection from '@/app/_components/AboutSection';
import CTASection from '@/app/_components/CTASection';
import HeroSection from '@/app/_components/HeroSection';
import ServicesSection from '@/app/_components/ServicesSection';
import Video from '@/app/_components/video';
import { Metadata } from 'next';
import OurClients from './_components/OurClients';
import OurResultInNumbers from './_components/OurResultInNumbers';

export const metadata: Metadata = {
  title: 'Consultero | Home',
  description: 'Home page of Consultero',
};

export default async function Home() {
  // const user = await currentUser();

  // if (user !== null) {
  //   await updateUser(user);
  // } else {
  //   return redirect('/');
  // }

  return (
    <main className='space-y-8 bg-white lg:space-y-12'>
      <HeroSection />
      {/* <Brands /> */}
      <OurClients />
      <AboutSection />
      <OurResultInNumbers />
      <ServicesSection />
      <Video />
      <CTASection />
    </main>
  );
}
