import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20 mt-16">
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
      <section className="pt-20 pb-4">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-8">
            End commission confusion.
            <span className="text-primary block">Start commission clarity.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">Join the waitlist for Complytics, the AI-powered platform that replaces chaotic spreadsheets with real-time, error-free payouts.</p>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl mx-auto mb-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join the Waitlist</h2>
                  <p className="text-xl text-muted-foreground">
                    Get early access, priority onboarding, and exclusive updates.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input id="email" type="email" placeholder="Enter your work email" value={email} onChange={e => setEmail(e.target.value)} required />
                  </div>
                  <Button type="submit" className="w-full group text-lg py-6">
                    Reserve My Spot
                    <CheckCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </form>
                
                
              </CardContent>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Zap className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Eliminate Manual Work</h3>
                <p className="text-sm text-muted-foreground">
                  No more error-prone spreadsheets. Automated tracking pulls directly from Salesforce.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Real-Time Accuracy</h3>
                <p className="text-sm text-muted-foreground">
                  See your commission calculations update instantly with every deal. No waiting until month-end.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Effortless Scaling</h3>
                <p className="text-sm text-muted-foreground">Onboard new plans and team members in minutes, not months. Complytics adapts instantly as your company grows.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Waitlist;