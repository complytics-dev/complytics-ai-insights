import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Users, 
  Award, 
  Lightbulb,
  ArrowRight,
  MapPin,
  Mail,
  Linkedin
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Transparency First",
      description: "We believe commission calculations should be completely transparent and explainable to every stakeholder."
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "We're constantly pushing the boundaries of what's possible with AI and automation in commission tracking."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Our success is measured by how much time and frustration we save our customers every month."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to building the most accurate, reliable, and user-friendly commission platform available."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former VP of Finance at three SaaS companies. Experienced the commission tracking pain firsthand.",
      avatar: "👩‍💼",
      linkedin: "#"
    },
    {
      name: "Marcus Chen",
      role: "CTO & Co-Founder",
      bio: "Ex-Salesforce engineer with 10+ years building enterprise software solutions.",
      avatar: "👨‍💻",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Former RevOps leader who understands the complexities of sales compensation.",
      avatar: "👩‍💻",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "AI/ML expert with experience at Google and Microsoft, focused on transparent AI.",
      avatar: "👨‍🔬",
      linkedin: "#"
    }
  ];

  const stats = [
    { number: "500+", label: "SaaS Companies Trust Us" },
    { number: "$2.3B", label: "Commissions Processed" },
    { number: "99.9%", label: "Calculation Accuracy" },
    { number: "15min", label: "Average Setup Time" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Complytics</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We're on a mission to eliminate the chaos and inefficiency of manual commission tracking. Founded by operators who lived the pain, built by engineers who understand the complexity.
            </p>
            <Button size="lg">
              Join Our Mission
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Complytics was born out of frustration. Our founders spent countless hours every month wrestling with spreadsheets, chasing down data discrepancies, and fielding complaints from sales reps about commission calculations.
                  </p>
                  <p>
                    After experiencing this pain at multiple high-growth SaaS companies, we realized the problem wasn't unique to us. Every finance and RevOps team was fighting the same battles with legacy tools that weren't built for modern, complex compensation plans.
                  </p>
                  <p>
                    We founded Complytics to solve this once and for all. Using modern AI and intuitive design, we've created the commission tracking platform we always wished we had.
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we build and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={value.title} className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced operators and engineers who understand your challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={member.name} className="text-center">
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 transition-all duration-300">
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <a 
                    href={member.linkedin} 
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We'd love to hear from you. Whether you have questions, feedback, or just want to chat about commission tracking, we're here.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email Us</p>
                      <p className="text-muted-foreground">hello@complytics.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Office</p>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  We're Hiring!
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join our mission to simplify commission tracking for SaaS companies worldwide. We're looking for passionate builders who want to solve real problems.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Senior Frontend Engineer</span>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">Remote</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Product Designer</span>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">SF/Remote</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Customer Success Manager</span>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">Remote</span>
                  </div>
                </div>
                <Button className="w-full">
                  View All Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of the future of commission tracking. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;