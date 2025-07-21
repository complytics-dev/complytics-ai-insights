import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { submitContactEntry } from "@/integrations/supabase/contacts";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    salesReps: '',
    role: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!formData.email || !formData.name || !formData.company || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    
    try {
      await submitContactEntry({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        sales_reps: formData.salesReps || null,
        role: formData.role || null,
        message: formData.message
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
    return <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <ScrollAnimation>
              <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20 mt-16">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for contacting us. We've received your message and will get back to you as soon as possible.
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
      <div className="bg-background pt-24 pb-10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 mt-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">Have questions about Complytics? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-card rounded-2xl p-8 border border-border/50">
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
                  <Label htmlFor="message">How can we help you? *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your questions, challenges, or what you'd like to learn more about..." 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required 
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                    {error}
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full group text-lg py-6"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                  <CheckCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </form>

              
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4} className="text-center mt-6">
            <p className="text-muted-foreground">
              Prefer to email us? Reach out at{" "}
              <a href="mailto:complyticsadmin@complytics.cloud" className="text-primary hover:underline">
                complyticsadmin@complytics.cloud
              </a>
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
    <Footer />
    </div>;
}