import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Integrations", "Security"],
    Company: ["About", "Blog", "Careers", "Press", "Partners"],
    Resources: ["Documentation", "Help Center", "Community", "Webinars", "Status"],
    Legal: ["Privacy", "Terms", "Cookies", "Compliance", "GDPR"]
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Complytics
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-powered sales commission tracking that eliminates manual errors and saves hours every month.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">
                Stay updated
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest features and commission best practices.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Complytics. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};