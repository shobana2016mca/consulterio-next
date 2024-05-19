import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonial from "@/components/Tetimonial";
import Jobs from "@/components/Jobs";
import About from "@/components/aboutus";
import ContactUs from "@/components/ContactUs";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center bg-white">
        <Hero />
        {/* <Mission /> */}
        <About />

        <Services />
        <Reviews />
        <Testimonial />
        <Jobs />
        {/* <ContactUs /> */}
      </div>
    </main>
  );
}
