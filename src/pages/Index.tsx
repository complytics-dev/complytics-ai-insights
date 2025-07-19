import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoBar />
      <Features />
      <Demo />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;