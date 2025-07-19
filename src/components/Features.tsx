import { Brain, Zap, Shield, BarChart3, RefreshCw, Calculator } from "lucide-react";

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
      description: "Clean, visual reports that sales reps and finance teams actually want to use, with drill-down capabilities."
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Get up and running in minutes, not months. No complex enterprise setup or lengthy onboarding required."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              streamline commissions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Replace manual processes with intelligent automation. Built for modern SaaS teams who demand accuracy and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-feature"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};