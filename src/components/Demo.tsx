import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Demo = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              See Complytics in action
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Watch how easy it is to set up automated commission tracking that your entire team will love.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-1 mb-12">
            <div className="relative bg-background rounded-xl overflow-hidden">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/30 transition-colors duration-300 cursor-pointer group">
                    <Play className="h-8 w-8 text-primary ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-lg font-medium text-foreground mb-2">Interactive Demo</p>
                  <p className="text-muted-foreground">3 minutes • No signup required</p>
                </div>
              </div>
              
              {/* Video overlay stats */}
              <div className="absolute top-6 left-6">
                <div className="bg-background/95 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">LIVE</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6">
                <div className="bg-background/95 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50">
                  <p className="text-sm font-medium">$2.3M commissions processed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-demo">
                <Button size="lg" className="group">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/request-demo">
                <Button variant="outline" size="lg">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              Join 500+ SaaS companies automating their commission processes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};