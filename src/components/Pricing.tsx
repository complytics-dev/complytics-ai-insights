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
  return;
};