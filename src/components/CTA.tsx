import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Background decoration consistent with theme */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Join 500+ companies automating their commissions
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ready to eliminate
            <br />
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              commission chaos?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Stop wasting time on manual calculations. Start your free trial today and see why finance teams love Complytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-demo">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 h-auto group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                Talk to Sales
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-12 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              14-day free trial
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