import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Finance",
      company: "TechFlow",
      avatar: "👩‍💼",
      content: "Complytics reduced our commission calculation time from 3 days to 30 minutes. The accuracy is perfect and our sales team finally trusts the numbers.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of RevOps",
      company: "DataSync",
      avatar: "👨‍💻",
      content: "The Salesforce integration is seamless. We went from manual spreadsheets to automated reports overnight. Game changer for our scaling team.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Sales Director",
      company: "CloudVault",
      avatar: "👩‍💼",
      content: "Our sales reps love the transparency. They can see their commissions in real-time instead of waiting weeks for updates. Motivation is through the roof.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loved by finance and sales teams
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers say about transforming their commission processes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-feature">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-foreground text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};