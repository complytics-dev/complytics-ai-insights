import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  Users, 
  Star,
  ArrowRight,
  Calendar,
  Video
} from "lucide-react";

const Demo = () => {
  const demoSteps = [
    {
      step: 1,
      title: "Connect Your Data",
      description: "Link Salesforce and other systems in under 2 minutes",
      duration: "2 min"
    },
    {
      step: 2,
      title: "Upload Commission Plans",
      description: "Our AI automatically parses your existing compensation documents",
      duration: "1 min"
    },
    {
      step: 3,
      title: "Review & Customize",
      description: "Fine-tune rules and validate calculations with sample data",
      duration: "5 min"
    },
    {
      step: 4,
      title: "Go Live",
      description: "Start tracking commissions in real-time with full transparency",
      duration: "Instant"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP Finance",
      company: "TechFlow",
      content: "Setup took 8 minutes. We were processing commissions the same day. Incredible.",
      avatar: "👩‍💼",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of RevOps",
      company: "DataSync",
      content: "Finally, a commission tool that our sales team actually wants to use daily.",
      avatar: "👨‍💻",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Sales Director",
      company: "CloudVault",
      content: "The transparency boost to team morale was immediate and noticeable.",
      avatar: "👩‍💼",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  See It <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Live</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Watch how Complytics transforms commission tracking from a monthly headache into a real-time competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => {
                      document.getElementById('demo-form')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Live Demo
                  </Button>
                  <Button variant="outline" size="lg">
                    <Video className="mr-2 h-4 w-4" />
                    Watch Self-Guided Tour
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    15-minute demo
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    No sales pressure
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Custom scenario
                  </div>
                </div>
              </div>

              {/* Interactive Demo Preview */}
              <div className="relative">
                <div className="bg-card rounded-2xl p-1 border border-border shadow-hero">
                  <div className="bg-gradient-to-br from-muted/50 to-muted rounded-xl overflow-hidden">
                    <div className="aspect-video flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors duration-300 cursor-pointer group">
                          <Play className="h-8 w-8 text-primary ml-1 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <p className="text-lg font-medium text-foreground mb-2">Interactive Demo</p>
                        <p className="text-muted-foreground">Click to explore live</p>
                      </div>
                      
                      {/* Floating Stats */}
                      <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium">LIVE DEMO</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
                        <p className="text-sm font-medium">15 min average session</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Flow Steps */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              The Onboarding Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              See exactly how fast you can go from signup to processing commissions
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {demoSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
                      <Clock className="h-3 w-3" />
                      {step.duration}
                    </div>
                  </div>
                  
                  {/* Connector Line */}
                  {index < demoSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Total setup time: Under 10 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from teams who've experienced the Complytics difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Ready for Your Demo?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Book a personalized demo and see how Complytics can solve your specific commission tracking challenges.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Customized to your commission structure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Live Q&A with product experts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">ROI calculation for your team size</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Implementation timeline discussion</span>
                  </div>
                </div>
              </div>

              <div id="demo-form" className="bg-card rounded-2xl p-8 border border-border">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Work Email
                    </label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input placeholder="Acme SaaS Inc." />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sales Team Size
                    </label>
                    <Input placeholder="e.g., 10-50 reps" />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Schedule Demo
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    We'll contact you within 24 hours to schedule your personalized demo
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;