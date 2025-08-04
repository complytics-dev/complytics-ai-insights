import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Shield, BarChart3, Code, BookOpen, ArrowRight, Download, Play } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const Product = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Tracking",
      description: "Automatically track and calculate commissions using advanced AI algorithms that learn from your business patterns."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Real-time Accuracy",
      description: "Ensure 100% accuracy in commission calculations with real-time data synchronization and validation."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Get deep insights into sales performance, commission trends, and optimization opportunities."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Automated Workflows",
      description: "Streamline your commission management with automated approval workflows and payment processing."
    }
  ];

  const installationSteps = [
    {
      step: "1",
      title: "Install the Package",
      description: "Add Complytics to your project with a simple npm install command.",
      code: "npm install @complytics/ai-commissions"
    },
    {
      step: "2",
      title: "Configure Your Settings",
      description: "Set up your commission rules, rates, and business logic in the dashboard.",
      code: "complytics init --config ./complytics.config.js"
    },
    {
      step: "3",
      title: "Integrate with Your Data",
      description: "Connect your sales data sources and start tracking commissions automatically.",
      code: "complytics connect --source salesforce --api-key YOUR_KEY"
    },
    {
      step: "4",
      title: "Start Tracking",
      description: "Begin monitoring commissions in real-time with our intuitive dashboard.",
      code: "complytics start --dashboard"
    }
  ];

  const supportedFrameworks = [
    { name: "React", icon: "⚛️" },
    { name: "Vue.js", icon: "💚" },
    { name: "Angular", icon: "🅰️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Ruby", icon: "💎" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="bg-background pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <ScrollAnimation className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              AI Commissions Tracking Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The intelligent AI commissions tracking platform that automates sales monitoring,
              commission calculation, and performance analytics for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Get Started
              </Button>
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </ScrollAnimation>

          {/* Mission Statement */}
          <ScrollAnimation delay={0.2} className="mb-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
                To democratize AI commissions tracking by building intelligent, automated solutions that help businesses
                accurately track, calculate, and optimize their sales commissions. We believe that commission management
                shouldn't be a manual burden, but a strategic advantage. Our AI-powered platform transforms the way
                organizations approach sales performance tracking, making it accurate, transparent, and profitable.
              </p>
            </div>
          </ScrollAnimation>

          {/* Features Section */}
          <ScrollAnimation delay={0.3} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>

          {/* Installation Section */}
          <ScrollAnimation delay={0.4} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Installation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {installationSteps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary" className="text-sm">
                        {step.step}
                      </Badge>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{step.description}</p>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-sm font-mono">{step.code}</code>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>

          {/* Supported Frameworks */}
          <ScrollAnimation delay={0.5} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Supported Frameworks</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {supportedFrameworks.map((framework, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="text-3xl mb-2">{framework.icon}</div>
                    <p className="font-medium">{framework.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>

          {/* Documentation CTA */}
          <ScrollAnimation delay={0.6} className="mb-16">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Comprehensive Documentation</h3>
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get started quickly with our detailed documentation, tutorials, and API reference.
                  Everything you need to integrate AI commissions tracking into your business.
                </p>
                <Button size="lg" variant="outline">
                  <Code className="mr-2 h-4 w-4" />
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Final CTA */}
          <ScrollAnimation delay={0.7} className="text-center">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Commission Tracking?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of businesses already using Complytics to automate their commission management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Product;
