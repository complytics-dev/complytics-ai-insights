import { Brain, Zap, Shield, BarChart3, RefreshCw, Calculator } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Parsing",
      description: "Automatically understands complex compensation plans and converts them into executable logic without manual setup."
    },
    {
      icon: RefreshCw,
      title: "Real-Time Salesforce Sync",
      description: "Seamlessly connects with your CRM to pull live revenue data, quotas, and deal information automatically."
    },
    {
      icon: BarChart3,
      title: "Intuitive Dashboards",
      description: "Clean, visual reports that executives actually want to use, revealing actionable insights and real-time performance trends."
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Get up and running in minutes, not months. No complex enterprise setup or lengthy onboarding required."
    }
  ];

  return (
    <section className="pt-24 pb-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollAnimation>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Everything you need to{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" style={{textShadow: '0 0 20px hsl(var(--primary) / 0.8), 0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.4)'}}>
                streamline commissions
              </span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Replace manual commission headaches with intelligent automation. Instantly model plans, validate payouts, and sync data with unmatched speed and accuracy.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={0.4 + (index * 0.05)}>
              <div
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-feature text-center h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-300 mx-auto">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
