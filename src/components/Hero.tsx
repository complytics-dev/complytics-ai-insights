import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dashboard.jpg";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                  <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" style={{textShadow: '0 0 20px hsl(var(--primary) / 0.8), 0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--primary) / 0.4)'}}>AI-Powered</span>{" "}
                  <span className="text-white">Automated Sales</span>{" "}
                  <span className="text-white">Commissions</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">Eliminate spreadsheet chaos and manual errors. Complytics uses AI to parse complex compensation plans, sync real-time Salesforce data, and generate accurate payout reports within seconds.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/waitlist">
                  <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg">
                    <Play className="mr-2 h-4 w-4" />
                    Reserve Your Spot Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/request-demo">
                  
                </Link>
              </div>
              
              
            </div>
            
            {/* Product mockup */}
            <div className="relative">
              <div className="relative z-10 transform lg:scale-110">
                <img src={heroImage} alt="Complytics Dashboard" className="w-full h-auto rounded-2xl shadow-hero border border-border/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
