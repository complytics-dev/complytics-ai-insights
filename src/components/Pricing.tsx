import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small sales teams",
      price: { monthly: 49, annual: 39 },
      features: [
        "Up to 10 sales reps",
        "Basic commission calculations",
        "Salesforce integration",
        "Monthly reports",
        "Email support"
      ]
    },
    {
      name: "Professional",
      description: "For growing SaaS companies",
      price: { monthly: 149, annual: 119 },
      features: [
        "Up to 50 sales reps",
        "Advanced commission logic",
        "Real-time sync & reports",
        "Custom dashboards",
        "API access",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: { monthly: 299, annual: 239 },
      features: [
        "Unlimited sales reps",
        "Complex commission structures",
        "White-label options",
        "Advanced analytics",
        "Dedicated CSM",
        "Custom integrations"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start free, scale as you grow. No hidden fees or complex contracts.
          </p>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                !isAnnual ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                isAnnual ? "bg-background text-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              Annual
              <span className="ml-2 px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-feature ${
                plan.popular
                  ? "border-primary bg-card shadow-feature scale-105"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">
                    /month {isAnnual && "billed annually"}
                  </span>
                </div>
                
                <Link to="/request-demo" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular ? "" : "variant-outline"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Start Free Trial
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};