import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
export const CTA = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl"></div>
      
    </section>
  );
};