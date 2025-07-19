import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Calendar,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get answers to your questions",
      contact: "support@complytics.com",
      response: "Response within 4 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team directly",
      contact: "+1 (555) 123-4567",
      response: "Available 9 AM - 6 PM PT"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help when you need it",
      contact: "Available on this page",
      response: "Average response: 2 minutes"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book time with our experts",
      contact: "Calendly booking",
      response: "Same day availability"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 456\nSan Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@complytics.com"
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 12\nNew York, NY 10013",
      phone: "+1 (555) 987-6543",
      email: "ny@complytics.com"
    }
  ];

  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "Most customers are up and running within 24 hours. Our onboarding process typically takes 15-30 minutes."
    },
    {
      question: "Do you integrate with our existing tools?",
      answer: "Yes! We integrate with 50+ tools including Salesforce, HubSpot, Workday, and most major CRMs and payroll systems."
    },
    {
      question: "What if we have complex commission structures?",
      answer: "Our AI can handle even the most complex commission plans. We've successfully implemented structures with multiple tiers, territories, and custom variables."
    },
    {
      question: "Is our data secure?",
      answer: "Absolutely. We're SOC 2 compliant and use enterprise-grade security. Your data is encrypted in transit and at rest."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Have questions about Complytics? Want to see a demo? Ready to get started? We're here to help every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="mr-2 h-4 w-4" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={method.title} className="bg-card rounded-2xl p-6 border border-border text-center hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-primary font-medium text-sm mb-2">
                  {method.contact}
                </p>
                <p className="text-muted-foreground text-xs">
                  {method.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Fill out the form and we'll get back to you within 24 hours. For urgent matters, please use our live chat or call us directly.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Quick Response</p>
                      <p className="text-muted-foreground text-sm">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Expert Support</p>
                      <p className="text-muted-foreground text-sm">Our team includes commission tracking specialists</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Custom Solutions</p>
                      <p className="text-muted-foreground text-sm">We tailor our approach to your specific needs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Work Email *
                    </label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input placeholder="Acme SaaS Inc." />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What can we help you with? *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your commission tracking challenges or questions..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit us in person or reach out to our local teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <div key={office.city} className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {office.city}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Address</p>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">
                        {office.address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Phone</p>
                      <p className="text-muted-foreground text-sm">{office.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Email</p>
                      <p className="text-muted-foreground text-sm">{office.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Hours</p>
                      <p className="text-muted-foreground text-sm">Mon-Fri: 9 AM - 6 PM PT</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about Complytics
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your question? We're here to help.
            </p>
            <Button variant="outline">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of SaaS companies who trust Complytics for their commission tracking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Calendar className="mr-2 h-4 w-4" />
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;