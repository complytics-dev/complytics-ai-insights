import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Shield, Users, Zap, TrendingUp } from 'lucide-react';
const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };
  if (isSubmitted) {
    return <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Welcome to the waitlist!</h1>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest in Complytics. Your spot on the waitlist is reserved, 
                and you'll be among the first to experience automated commission tracking.
              </p>
              
            </div>
          </div>
        </div>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            End commission confusion.
            <span className="text-primary block">Start commission clarity.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the waitlist for Complytics, the AI-powered platform that eliminates manual 
            spreadsheets and delivers transparent, accurate commission reports for every sales rep.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Eliminate Manual Work</h3>
                <p className="text-muted-foreground">
                  No more error-prone spreadsheets. Automated tracking pulls directly from Salesforce.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Connect with Salesforce and existing tools. No disruption to your current workflow.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Transparent Reports</h3>
                <p className="text-muted-foreground">
                  Every sales rep sees exactly how their commission is calculated. No more disputes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-3">Join the Waitlist</h2>
                  <p className="text-muted-foreground">
                    Get early access, priority onboarding, and exclusive updates.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input type="email" placeholder="Enter your work email" value={email} onChange={e => setEmail(e.target.value)} required className="h-12 text-lg" />
                  <Button type="submit" className="w-full h-12 text-lg font-semibold">
                    Reserve My Spot
                  </Button>
                </form>
                
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Waitlist;