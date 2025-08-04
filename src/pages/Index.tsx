import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { 
  CheckCircle, 
  Code,
  Upload,
  Settings
} from "lucide-react";

const Index = () => {
  const processSteps = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Authenticate from Salesforce or any other CRM",
      description: "Connect your existing CRM system seamlessly with our secure authentication process."
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload compensation documents",
      description: "Simply upload your compensation plans and documents to get started quickly."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Review and Customize",
      description: "Review the AI-generated setup and customize it to match your specific requirements."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Go Live and See Instant Results!",
      description: "Launch your automated commission tracking and see immediate improvements in accuracy and efficiency."
    }
  ];



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
      
      {/* Key Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get Started in 4 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From setup to live results in minutes, not months
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {step.icon}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

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
