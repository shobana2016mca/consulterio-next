import AboutSection from '@/app/_components/AboutSection';
import Brands from '@/app/_components/Brands';
import CTASection from '@/app/_components/CTASection';
import HeroSection from '@/app/_components/HeroSection';
import OurResultInNumbers from '@/app/_components/OurResultInNumbers';
import ServicesSection from '@/app/_components/ServicesSection';
import Video from '@/app/_components/video';

export default async function Home() {
  // const user = await currentUser();

  // if (user !== null) {
  //   await updateUser(user);
  // } else {
  //   return redirect('/');
  // }

  return (
    <main>
      <div className='flex flex-col items-center bg-white'>
        <HeroSection />
        <Brands />
        <AboutSection />
        <OurResultInNumbers />
        <ServicesSection />
        <Video />
        {/* <TestimonialSection /> */}
        <CTASection />
      </div>
    </main>
  );
}
