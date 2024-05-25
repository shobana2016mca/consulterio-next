import AboutSection from "@/components/AboutSection";
import Brands from "@/components/Brands";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import OurResultInNumbers from "@/components/OurResultInNumbers";
import ServicesSection from "@/components/ServicesSection";
import Video from "@/components/video";
import { updateUser } from "@/lib/user.actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    await updateUser(user);
  }

  return (
    <main>
      <div className="flex flex-col items-center bg-white">
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
