import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ServicesSection } from "@/components/services-section";
import { AppsSection } from "@/components/apps-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { Footer } from "@/components/footer";

export default function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <AppsSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
