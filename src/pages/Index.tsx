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
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Star, 
  ArrowRight,
  Play,
  Download,
  BookOpen,
  Code
} from "lucide-react";

const Index = () => {
  const keyBenefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Automation",
      description: "Automatically track and calculate commissions using advanced AI that learns from your business patterns."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "100% Accuracy",
      description: "Eliminate manual errors with real-time data validation and intelligent rule processing."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-time Insights",
      description: "Get instant visibility into sales performance and commission trends with live dashboards."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Transparency",
      description: "Build trust with transparent commission tracking that motivates and retains top performers."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP Finance",
      company: "TechFlow",
      content: "Setup took 8 minutes. We were processing commissions the same day. Incredible.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of RevOps",
      company: "DataSync",
      content: "Finally, a commission tool that our sales team actually wants to use daily.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Sales Director",
      company: "CloudVault",
      content: "The transparency boost to team morale was immediate and noticeable.",
      rating: 5
    }
  ];

  const stats = [
    { number: "95%", label: "Faster Setup" },
    { number: "100%", label: "Accuracy Rate" },
    { number: "24/7", label: "Real-time Tracking" },
    { number: "10min", label: "Integration Time" }
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
              Why Choose Complytics?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your commission tracking from a manual burden into a strategic advantage
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
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

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers are saying about Complytics
            </p>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Get Started in Minutes
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of businesses already using Complytics to automate their commission management
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Play className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">Watch Demo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      See Complytics in action with our interactive demo
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Download className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">Free Trial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Start your 14-day free trial with full access
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Explore our comprehensive guides and API docs
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
