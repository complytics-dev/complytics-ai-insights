import { Upload, Brain, RefreshCw, FileBarChart } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Upload Commission Plans",
      description: "Simply upload your complex commission plans in any format.",
      icon: Upload,
      imagePlaceholder: "Upload interface screenshot"
    },
    {
      id: 2,
      title: "AI Parse and Interpret",
      description: "Our AI reads and interprets complex compensation logic, converting plans into executable rules with efficiency and accuracy.",
      icon: Brain,
      imagePlaceholder: "AI processing visualization"
    },
    {
      id: 3,
      title: "Real Time CRM Sync",
      description: "Automatically syncs with your CRM data, pulling live revenue, quotas, and deal information in real-time.",
      icon: RefreshCw,
      imagePlaceholder: "CRM integration dashboard"
    },
    {
      id: 4,
      title: "Instant Dashboards and Reporting",
      description: "Delivers clean, executive-ready reports and dashboards with actionable insights for your sales team.",
      icon: FileBarChart,
      imagePlaceholder: "Dashboard and reports view"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything you need to
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              streamline commissions.
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Change your entire sales compensation workflow today with Complytics. 
            </p>
          </div>
        </ScrollAnimation>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Top Row - First Two Steps */}
          {steps.slice(0, 2).map((step, index) => (
            <ScrollAnimation key={step.id} delay={0.1 * index}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="mb-6">
                  <step.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Image Placeholder */}
                <div className="flex-grow bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-gray-200 flex items-center justify-center min-h-[200px]">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium">{step.imagePlaceholder}</p>
                    <p className="text-xs mt-1">Add product screenshot here</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
          
          {/* Bottom Row - Last Two Steps */}
          {steps.slice(2, 4).map((step, index) => (
            <ScrollAnimation key={step.id} delay={0.3 + (0.1 * index)}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="mb-6">
                  <step.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Image Placeholder */}
                <div className="flex-grow bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-gray-200 flex items-center justify-center min-h-[200px]">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                      <step.icon className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium">{step.imagePlaceholder}</p>
                    <p className="text-xs mt-1">Add product screenshot here</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};