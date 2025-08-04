import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ui/scroll-animation";


const Index = () => {




  const stats = [
    { number: "95%", label: "Faster Setup" },
    { number: "100%", label: "Accuracy Rate" },
    { number: "24/7", label: "Real-time Tracking" },
    { number: "30 min", label: "Integration Time" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      


      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>



      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
