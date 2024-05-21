import About from '@/components/About';
import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonial from '@/components/Tetimonial';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center bg-white'>
        <Hero />
        {/* <Mission /> */}
        <About />
        <Services />
        {/* <Reviews /> */}
        <Testimonial />
        <CTA />
        {/* <Jobs /> */}
        {/* <ContactUs /> */}
      </div>
    </main>
  );
}
