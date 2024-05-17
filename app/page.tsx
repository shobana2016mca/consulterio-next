import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonial from "@/components/Tetimonial";
import Jobs from "@/components/Jobs";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center bg-white">
        <Hero />
        <Mission />
        <Services />
        <Testimonial />
        <Jobs />
        <ContactUs />
      </div>
    </main>
  );
}
