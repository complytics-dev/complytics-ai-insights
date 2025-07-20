import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

export default function RequestDemo() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to simplify commissions?
            </h1>
            <p className="text-xl text-muted-foreground">
              Book a personalized demo to see how Complytics eliminates commission chaos for your team. No sales pitch - just a real walkthrough tailored to your needs.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Full Name *</Label>
                  <Input id="firstName" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" placeholder="Your Company" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salesReps">Number of Sales Reps</Label>
                  <Select>
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
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="finance">Finance Leader</SelectItem>
                    <SelectItem value="revops">RevOps</SelectItem>
                    <SelectItem value="sales">Sales Leader</SelectItem>
                    <SelectItem value="founder">Founder/CEO</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your current commission process and any specific challenges you're facing..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full group text-lg py-6">
                Request Demo
                <CheckCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <span className="font-medium">What to expect:</span> 30-minute personalized demo • See real data flows • Q&A with our team • No sales pressure
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Prefer to email us? Reach out at{" "}
              <a href="mailto:hello@complytics.com" className="text-primary hover:underline">
                hello@complytics.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}