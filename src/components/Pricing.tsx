import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const plans = [{
    name: "Starter",
    description: "Perfect for small sales teams",
    price: {
      monthly: 49,
      annual: 39
    },
    features: ["Up to 10 sales reps", "Basic commission calculations", "Salesforce integration", "Monthly reports", "Email support"]
  }, {
    name: "Professional",
    description: "For growing SaaS companies",
    price: {
      monthly: 149,
      annual: 119
    },
    features: ["Up to 50 sales reps", "Advanced commission logic", "Real-time sync & reports", "Custom dashboards", "API access", "Priority support"],
    popular: true
  }, {
    name: "Enterprise",
    description: "For large organizations",
    price: {
      monthly: 299,
      annual: 239
    },
    features: ["Unlimited sales reps", "Complex commission structures", "White-label options", "Advanced analytics", "Dedicated CSM", "Custom integrations"]
  }];
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your team size and needs. All plans include our core AI-powered commission tracking.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual <span className="text-primary">(Save 20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? 'border-primary bg-primary/5 shadow-lg scale-105'
                  : 'border-border bg-card'
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
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-primary mt-1">
                    Billed annually (${plan.price.annual * 12})
                  </p>
                )}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/request-demo" className="block">
                <Button
                  className={`w-full ${
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 30-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};