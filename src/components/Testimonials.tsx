import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    name: "Sarah Chen",
    role: "VP of Finance",
    company: "TechFlow",
    avatar: "👩‍💼",
    content: "Complytics reduced our commission calculation time from 3 days to 30 minutes. The accuracy is perfect and our sales team finally trusts the numbers.",
    rating: 5
  }, {
    name: "Marcus Rodriguez",
    role: "Head of RevOps",
    company: "DataSync",
    avatar: "👨‍💻",
    content: "The Salesforce integration is seamless. We went from manual spreadsheets to automated reports overnight. Game changer for our scaling team.",
    rating: 5
  }, {
    name: "Emily Watson",
    role: "Sales Director",
    company: "CloudVault",
    avatar: "👩‍💼",
    content: "Our sales reps love the transparency. They can see their commissions in real-time instead of waiting weeks for updates. Motivation is through the roof.",
    rating: 5
  }];
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section className="py-24 bg-background">
      
    </section>;
};