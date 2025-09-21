import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-2 pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Moving Dots */}
      {/* Top Row */}
      <div className="absolute top-20 left-12 w-1.5 h-1.5 bg-blue-500/60 rounded-full" style={{animation: 'float1 6s ease-in-out infinite', animationDelay: '0s'}}></div>
      <div className="absolute top-32 left-1/4 w-1 h-1 bg-purple-500/70 rounded-full" style={{animation: 'float2 8s ease-in-out infinite', animationDelay: '1s'}}></div>
      <div className="absolute top-28 left-1/3 w-2 h-2 bg-blue-400/50 rounded-full" style={{animation: 'float3 7s ease-in-out infinite', animationDelay: '0.5s'}}></div>
      <div className="absolute top-44 left-1/2 w-1 h-1 bg-purple-400/65 rounded-full" style={{animation: 'float4 9s ease-in-out infinite', animationDelay: '2s'}}></div>
      <div className="absolute top-36 right-1/3 w-1.5 h-1.5 bg-blue-600/55 rounded-full" style={{animation: 'float5 5s ease-in-out infinite', animationDelay: '1.5s'}}></div>
      <div className="absolute top-24 right-1/4 w-1 h-1 bg-purple-600/60 rounded-full" style={{animation: 'float6 10s ease-in-out infinite', animationDelay: '0.8s'}}></div>
      <div className="absolute top-48 right-20 w-2 h-2 bg-blue-300/50 rounded-full" style={{animation: 'float1 7.5s ease-in-out infinite', animationDelay: '3s'}}></div>
      
      {/* Middle Rows */}
      <div className="absolute top-64 left-16 w-1 h-1 bg-blue-500/65 rounded-full" style={{animation: 'float2 6.5s ease-in-out infinite', animationDelay: '0.3s'}}></div>
      <div className="absolute top-72 left-1/5 w-1.5 h-1.5 bg-purple-500/55 rounded-full" style={{animation: 'float3 8.5s ease-in-out infinite', animationDelay: '1.8s'}}></div>
      <div className="absolute top-56 left-1/3 w-1 h-1 bg-blue-400/70 rounded-full" style={{animation: 'float4 6s ease-in-out infinite', animationDelay: '1.2s'}}></div>
      <div className="absolute top-80 left-1/2 w-2 h-2 bg-purple-400/50 rounded-full" style={{animation: 'float5 9.5s ease-in-out infinite', animationDelay: '0.7s'}}></div>
      <div className="absolute top-68 right-1/3 w-1 h-1 bg-blue-600/60 rounded-full" style={{animation: 'float6 7s ease-in-out infinite', animationDelay: '2.3s'}}></div>
      <div className="absolute top-76 right-1/4 w-1.5 h-1.5 bg-purple-600/55 rounded-full" style={{animation: 'float1 5.5s ease-in-out infinite', animationDelay: '1.7s'}}></div>
      <div className="absolute top-52 right-16 w-1 h-1 bg-blue-300/65 rounded-full" style={{animation: 'float2 8s ease-in-out infinite', animationDelay: '0.9s'}}></div>
      
      {/* Lower Middle */}
      <div className="absolute top-96 left-20 w-1.5 h-1.5 bg-blue-500/55 rounded-full" style={{animation: 'float3 6.8s ease-in-out infinite', animationDelay: '1.4s'}}></div>
      <div className="absolute top-88 left-1/4 w-1 h-1 bg-purple-500/70 rounded-full" style={{animation: 'float4 7.2s ease-in-out infinite', animationDelay: '0.6s'}}></div>
      <div className="absolute top-104 left-1/3 w-2 h-2 bg-blue-400/50 rounded-full" style={{animation: 'float5 9s ease-in-out infinite', animationDelay: '2.1s'}}></div>
      <div className="absolute top-92 right-1/3 w-1 h-1 bg-purple-400/65 rounded-full" style={{animation: 'float6 6.3s ease-in-out infinite', animationDelay: '1.6s'}}></div>
      <div className="absolute top-100 right-1/4 w-1.5 h-1.5 bg-blue-600/55 rounded-full" style={{animation: 'float1 8.7s ease-in-out infinite', animationDelay: '0.4s'}}></div>
      
      {/* Bottom Row */}
      <div className="absolute bottom-20 left-16 w-2 h-2 bg-blue-500/50 rounded-full" style={{animation: 'float2 7.8s ease-in-out infinite', animationDelay: '1.9s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-purple-500/65 rounded-full" style={{animation: 'float3 5.8s ease-in-out infinite', animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-28 left-1/3 w-1.5 h-1.5 bg-blue-400/60 rounded-full" style={{animation: 'float4 6.4s ease-in-out infinite', animationDelay: '2.2s'}}></div>
      <div className="absolute bottom-44 left-1/2 w-1 h-1 bg-purple-400/70 rounded-full" style={{animation: 'float5 8.1s ease-in-out infinite', animationDelay: '1.3s'}}></div>
      <div className="absolute bottom-36 right-1/3 w-2 h-2 bg-blue-600/50 rounded-full" style={{animation: 'float6 9.7s ease-in-out infinite', animationDelay: '0.8s'}}></div>
      <div className="absolute bottom-24 right-1/4 w-1 h-1 bg-purple-600/65 rounded-full" style={{animation: 'float1 5.2s ease-in-out infinite', animationDelay: '1.1s'}}></div>
      <div className="absolute bottom-48 right-20 w-1.5 h-1.5 bg-blue-300/55 rounded-full" style={{animation: 'float2 7.9s ease-in-out infinite', animationDelay: '2.4s'}}></div>
      
      {/* Additional scattered dots */}
      <div className="absolute bottom-64 left-1/5 w-1 h-1 bg-blue-500/60 rounded-full" style={{animation: 'float3 6.4s ease-in-out infinite', animationDelay: '1.8s'}}></div>
      <div className="absolute bottom-72 left-1/6 w-1.5 h-1.5 bg-purple-500/50 rounded-full" style={{animation: 'float4 8.8s ease-in-out infinite', animationDelay: '0.7s'}}></div>
      <div className="absolute bottom-56 right-1/5 w-1 h-1 bg-blue-400/65 rounded-full" style={{animation: 'float5 7.3s ease-in-out infinite', animationDelay: '2.0s'}}></div>
      <div className="absolute bottom-80 right-1/6 w-2 h-2 bg-purple-400/55 rounded-full" style={{animation: 'float6 9.6s ease-in-out infinite', animationDelay: '1.5s'}}></div>

      {/* Large Background Gradients */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 sm:px-8 md:px-12 pt-8 sm:pt-12 md:pt-16 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Centered Content Section */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="space-y-8">
              <div className="space-y-6">
                <ScrollAnimation>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight tracking-tight">
                    <span className="text-foreground">Fair, transparent commissions —</span><br />
                    <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent tracking-wide">powered by AI</span>
                  </h1>
                </ScrollAnimation>
                
                <ScrollAnimation delay={0.2}>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">Build trust with automated, auditable payout workflows. Help sales teams focus on selling, not second-guessing spreadsheets.</p>
                </ScrollAnimation>
              </div>
              
              <ScrollAnimation delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://calendly.com/rishab-motgi-complytics/complytics-discovery-call?back=1&month=2025-09" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg text-lg px-8 py-4">
                      <Play className="mr-2 h-5 w-5" />
                      Book a Demo
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  <Link to="/contact-us">
                    <Button size="lg" variant="outline" className="group text-lg px-8 py-4">
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>

        </div>
      </div>
    </section>;
};
