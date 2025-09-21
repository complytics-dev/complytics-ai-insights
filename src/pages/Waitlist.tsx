import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Shield, Users, Zap, TrendingUp } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { submitWaitlistEntry } from '@/integrations/supabase/waitlist';

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    salesReps: '',
    role: '',
    crm: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!formData.email || !formData.name || !formData.company) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    
    try {
      await submitWaitlistEntry({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        sales_reps: formData.salesReps || null,
        role: formData.role || null,
        crm: formData.crm || null
      });
      
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return <div className="min-h-screen">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <ScrollAnimation>
              <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20 mt-16">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h1 className="text-3xl font-bold mb-4">Welcome to the waitlist!</h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest in Complytics. Your spot on the waitlist is reserved, 
                  and you'll be among the first to experience automated commission tracking.
                </p>
                
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <Footer />
      </div>;
  }
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-4">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ScrollAnimation>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-8">
              End commission confusion.
              <span className="block">Start commission clarity.</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">Join 10+ companies who've signed up to modernize their commission process with Complytics, our AI-powered platform that replaces chaotic spreadsheets with real-time, error-free payouts.</p>
          </ScrollAnimation>
        </div>
      </section>



      {/* Waitlist Form */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl mx-auto mb-8">
            <ScrollAnimation delay={0.3}>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-3">Get Early Access</h2>
                    <p className="text-muted-foreground">
                      Up to 3 months free, direct influence on product, discounted long-term pricing, priority for features + integration.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          placeholder="John Doe" 
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@company.com" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required 
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input 
                          id="company" 
                          placeholder="Your Company" 
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="salesReps">Number of Sales Reps</Label>
                        <Select value={formData.salesReps} onValueChange={(value) => handleInputChange('salesReps', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 reps</SelectItem>
                            <SelectItem value="11-50">11-50 reps</SelectItem>
                            <SelectItem value="51-100">51-100 reps</SelectItem>
                            <SelectItem value="100+">100+ reps</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role</Label>
                        <Input 
                          id="role" 
                          placeholder="e.g. Finance Leader, RevOps, Sales Leader" 
                          value={formData.role}
                          onChange={(e) => handleInputChange('role', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="crm">Primary CRM</Label>
                        <Input 
                          id="crm" 
                          placeholder="e.g. Salesforce, HubSpot, Pipedrive" 
                          value={formData.crm}
                          onChange={(e) => handleInputChange('crm', e.target.value)}
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                        {error}
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 font-semibold text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Reserve My Spot'}
                    </Button>
                  </form>
                  
                  
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Waitlist;