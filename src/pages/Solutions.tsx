import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp,
  Building2,
  Workflow,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Solutions = () => {
  const roles = [
    {
      icon: DollarSign,
      title: "Finance Leaders",
      description: "Ensure accurate payouts and maintain audit compliance",
      benefits: [
        "Eliminate calculation errors and disputes",
        "Complete audit trail for compliance",
        "Reduce month-end processing time by 90%",
        "Automated accrual calculations",
        "Real-time financial reporting"
      ],
      color: "text-blue-500"
    },
    {
      icon: Workflow,
      title: "RevOps Teams",
      description: "Streamline data flow and align compensation with strategy",
      benefits: [
        "Seamless CRM and payroll integration",
        "Automated quota and territory management",
        "Reduced administrative overhead",
        "Data-driven compensation insights",
        "Scalable processes as you grow"
      ],
      color: "text-green-500"
    },
    {
      icon: Target,
      title: "Sales Managers",
      description: "Drive performance with transparent incentive alignment",
      benefits: [
        "Real-time quota visibility for teams",
        "Transparent commission tracking",
        "Performance analytics and insights",
        "Motivational dashboard for reps",
        "Easy plan adjustments and testing"
      ],
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Sales Representatives",
      description: "Track earnings in real-time with complete transparency",
      benefits: [
        "Live commission tracking",
        "Clear payout explanations",
        "Mobile-friendly dashboard",
        "Historical performance data",
        "Trust in accurate calculations"
      ],
      color: "text-orange-500"
    }
  ];

  const integrations = [
    {
      name: "Salesforce",
      description: "Complete CRM integration for deals, contacts, and revenue data",
      logo: "🔄",
      features: ["Real-time sync", "Custom field mapping", "Automated updates"]
    },
    {
      name: "Workday",
      description: "Seamless payroll integration for automated commission payouts",
      logo: "💼",
      features: ["Direct payroll feed", "Employee data sync", "Automated accruals"]
    },
    {
      name: "HubSpot",
      description: "Marketing and sales data integration for comprehensive tracking",
      logo: "🎯",
      features: ["Deal pipeline sync", "Contact management", "Revenue attribution"]
    },
    {
      name: "NetSuite",
      description: "Financial system integration for complete revenue reconciliation",
      logo: "📊",
      features: ["Revenue recognition", "GL integration", "Financial reporting"]
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
              Solutions for Every <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover how Complytics delivers value across your entire organization, from finance to sales teams.
            </p>
            <Button size="lg">
              See Your ROI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Role-Based Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Built for Every Role
            </h2>
            <p className="text-xl text-muted-foreground">
              Each team gets exactly what they need to succeed
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <div key={role.title} className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-feature">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center`}>
                    <role.icon className={`h-6 w-6 ${role.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {role.description}
                    </p>
                    <ul className="space-y-3">
                      {role.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
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

      {/* Integration Highlights */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-muted-foreground">
                Connect with the tools you already use — no disruption to your workflow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrations.map((integration, index) => (
                <div key={integration.name} className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/20 transition-all duration-300">
                  <div className="text-4xl mb-4">{integration.logo}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {integration.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {integration.description}
                  </p>
                  <ul className="space-y-2">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Don't see your integration? We support 50+ tools and can build custom integrations.
              </p>
              <Button variant="outline">
                View All Integrations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Complytics Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Complytics?
            </h2>
            <p className="text-xl text-muted-foreground">
              We're not just another commission tool — we're the modern solution your team deserves
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Modern UI/UX</h3>
              <p className="text-muted-foreground text-sm">Cleaner and more intuitive than legacy competitors</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Transparent AI</h3>
              <p className="text-muted-foreground text-sm">Explainable calculations for full confidence in results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Reduce Errors</h3>
              <p className="text-muted-foreground text-sm">Eliminate spreadsheet mistakes and commission disputes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Drive Performance</h3>
              <p className="text-muted-foreground text-sm">Align incentives with tailored commission rules</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to See the Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover how Complytics can transform your commission process in just 15 minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Calculate ROI
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;