import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  RefreshCw, 
  BarChart3, 
  Settings, 
  Shield, 
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Product = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Plan Parsing",
      description: "Automatically understands and converts complex compensation plans into executable logic without manual configuration.",
      benefits: ["Supports unlimited commission structures", "Natural language processing", "Zero manual setup required"]
    },
    {
      icon: RefreshCw,
      title: "Real-Time Data Sync",
      description: "Seamlessly integrates with Salesforce, payroll systems, and CRMs for live data synchronization.",
      benefits: ["Instant updates from Salesforce", "Bi-directional data flow", "Automated quota tracking"]
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Clean, intuitive interfaces that finance teams and sales reps actually want to use daily.",
      benefits: ["Role-based dashboard views", "Drill-down capabilities", "Mobile-responsive design"]
    },
    {
      icon: Settings,
      title: "Customizable Logic",
      description: "Flexible commission rules engine that adapts to your unique compensation structures.",
      benefits: ["Complex tier calculations", "Multi-variable formulas", "Territory-based rules"]
    },
    {
      icon: Shield,
      title: "Audit & Compliance",
      description: "Complete transparency with detailed audit trails and compliance reporting.",
      benefits: ["Full calculation history", "Compliance documentation", "Error tracking & resolution"]
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Get up and running in minutes, not months. No complex enterprise setup required.",
      benefits: ["5-minute onboarding", "Pre-built templates", "Instant ROI"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Product <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Overview</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover how Complytics transforms complex commission tracking into a simple, automated process that your entire team will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Request Live Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Features That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Every feature is designed to eliminate manual work and increase accuracy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={feature.title} className="group">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                See It In Action
              </h2>
              <p className="text-xl text-muted-foreground">
                Real screenshots from real customers using Complytics daily
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Dashboard View */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="aspect-video bg-muted/50 rounded-lg mb-4 flex items-center justify-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Executive Dashboard
                </h3>
                <p className="text-muted-foreground text-sm">
                  High-level commission metrics and team performance at a glance
                </p>
              </div>

              {/* Plan Setup */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="aspect-video bg-muted/50 rounded-lg mb-4 flex items-center justify-center">
                  <Settings className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Plan Configuration
                </h3>
                <p className="text-muted-foreground text-sm">
                  Intuitive setup for even the most complex commission structures
                </p>
              </div>

              {/* Payout Reports */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="aspect-video bg-muted/50 rounded-lg mb-4 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Payout Reports
                </h3>
                <p className="text-muted-foreground text-sm">
                  Detailed, auditable reports that sales reps and finance teams trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Commission Process?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of SaaS companies who've automated their commission tracking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;