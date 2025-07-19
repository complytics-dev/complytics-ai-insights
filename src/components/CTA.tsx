import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
export const CTA = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background decoration */}
      
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Limited Time Offer
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to eliminate{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              commission chaos?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of sales teams who have automated their commission tracking with Complytics. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist">
              <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg">
                Join Waitlist - Early Access
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/request-demo">
              <Button variant="outline" size="lg" className="group border-border/20">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              30-day free trial
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};