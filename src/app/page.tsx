import HeroSection from "@/components/home/HeroSection";
import EligibilitySection from "@/components/home/EligibilitySection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <EligibilitySection />
      <WhyChooseUsSection />
      <DestinationsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
}
