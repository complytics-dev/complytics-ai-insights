import { useState } from "react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("sales-leaders");

  const tabs = [
    { id: "sales-leaders", label: "Sales Leaders" },
    { id: "sales-reps", label: "Sales Reps" },
    { id: "finance-leads", label: "Finance Leads" },
    { id: "revops", label: "RevOps" }
  ];

  const tabContent = {
    "sales-leaders": {
      title: "For Sales Leaders",
      description: "Get complete visibility into commission calculations, team performance, and payout accuracy. Make data-driven decisions with real-time commission analytics and ensure your team is motivated with transparent, error-free payouts."
    },
    "sales-reps": {
      title: "For Sales Reps",
      description: "Access your commission calculations in real-time. See exactly how your deals impact your payouts with transparent, easy-to-understand commission breakdowns. No more guessing or waiting for monthly statements."
    },
    "finance-leads": {
      title: "For Finance Leads",
      description: "Ensure commission accuracy and compliance with automated calculations and audit trails. Reduce month-end close time, eliminate manual errors, and maintain complete financial transparency across all commission payouts."
    },
    "revops": {
      title: "For RevOps",
      description: "Streamline commission processes with automated calculations and seamless CRM integration. Reduce manual work, eliminate errors, and scale commission programs efficiently across the organization."
    }
  };

  return (
    <section className="py-16 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration to match Hero */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Large Background Gradients similar to Hero */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">
              <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto whitespace-nowrap">
              From sales reps to executives, Complytics is built for everyone on your revenue team.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-2 py-3 text-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          {/* Content Area */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Left Content - Takes up 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h3>
                
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>

              </div>

              {/* Right Content - Screenshot Placeholder - Takes up 1 column */}
              <div className="relative lg:col-span-1">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Screenshot for {activeTab}</p>
                    <p className="text-xs mt-1">Add product screenshot here</p>
                  </div>
                </div>
                
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};
