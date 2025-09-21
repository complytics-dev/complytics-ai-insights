import React, { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Github, Mail, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Rishab Motgi",
    role: "Chief Executive Officer",
    avatar: "/Edits/RishabHeadshot.jpeg",
    initials: "RM",
    social: {
      linkedin: "https://linkedin.com/in/rishab-motgi",
      email: "rishab.motgi@complytics.cloud"
    }
  },
  {
    name: "Joshua Thomas",
    role: "Chief Operating Officer",
    avatar: "/Edits/Main.jpeg",
    initials: "JT",
    social: {
      linkedin: "https://linkedin.com/in/joshuathomas06",
      github: "https://github.com/joshuathomas06",
      email: "joshua.thomas@complytics.cloud"
    }
  },
  {
    name: "Abhijit Nambiar",
    role: "Chief Technology Officer",
    avatar: "/Edits/Q62A9944.jpeg",
    initials: "AN",
    social: {
      linkedin: "https://www.linkedin.com/in/abhijit-nambiar-405800239/",
      github: "https://github.com/abhijitnambiar",
      email: "abhijit.nambiar@complytics.cloud"
    }
  },
  {
    name: "Harsha Kadiyala",
    role: "Chief Financial Officer",
    avatar: "/Edits/Q62A9936.jpeg",
    initials: "HK",
    social: {
      linkedin: "https://www.linkedin.com/in/sriharsha-kadiyala-abc/",
      email: "harsha.kadiyala@complytics.cloud"
    }
  },
  {
    name: "Abhishek Dandekar",
    role: "Chief Product Officer",
    avatar: "/Edits/Q62A9951.jpeg",
    initials: "AD",
    social: {
      linkedin: "https://www.linkedin.com/in/abhidan/",
      github: "https://github.com/abhidan",
      email: "abhishek.dandekar@complytics.cloud"
    }
  },
  {
    name: "Jeffrey Gao",
    role: "Vice President of Engineering",
    avatar: "/Edits/Q62A9956.jpg",
    initials: "JG",
    social: {
      linkedin: "https://linkedin.com/in/jeffreygao",
      github: "https://github.com/jeffgao26",
      email: "jeff.gao@complytics.cloud"
    }
  }
];

const Team = () => {
  // Removed dark mode enforcement - now uses system/default theme

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* About Us Section */}
          <ScrollAnimation className="mb-32">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white">
                About Us
              </h1>
              <p className="text-xl lg:text-2xl leading-relaxed max-w-4xl text-gray-300">
                We're a team of innovators passionate about transforming how businesses tackle 
                commissions tracking with a novel approach. We hope to eliminate spreadsheet chaos and bring transparency and efficiency to sales compensation.
              </p>
            </div>
          </ScrollAnimation>

          {/* Connected Story & Vision Section */}
          <ScrollAnimation delay={0.2} className="mb-32">
            <div className="max-w-7xl mx-auto bg-white/95 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Our Story - Left Top */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 flex items-center justify-center border-r border-gray-300 border-b">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-4">Our Story</h3>
                    <div className="w-16 h-1 bg-white/60 mx-auto"></div>
                  </div>
                </div>
                
                {/* Story Content - Right Top */}
                <div className="p-8 border-b border-gray-300">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Complytics started when I was the one grinding through commission spreadsheets. It hit me that the problem wasn't the math, it was the process: comp plans are written like legal documents, but we were forcing them into spreadsheets that do not scale.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I got tired of tedious work, so I built Complytics to solve it the right way, automating the whole thing from plan to payout. Our platform uses AI to parse complex compensation plans and sync real-time data, ensuring accuracy and transparency.
                    </p>
                    <div className="pt-6 border-t border-gray-300">
                      <p className="font-semibold text-gray-900 text-lg">— Rishab Motgi</p>
                      <p className="text-gray-600">Co-founder and CEO</p>
                    </div>
                  </div>
                </div>
                
                {/* Vision Content - Left Bottom */}
                <div className="p-8 border-r border-gray-300">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We're building the future where commission calculations happen 
                      in seconds, not hours, and where every sales rep trusts their payout completely.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      At the end of the day, commissions should not be a headache but rather a motivator. We hope to create a product that saves people time and give sales teams the confidence they need to focus on what they do best: selling.
                    </p>
                  </div>
                </div>
                
                {/* Our Vision - Right Bottom */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-4">Our Mission</h3>
                    <div className="w-16 h-1 bg-white/60 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Meet the Team Section */}
          <ScrollAnimation delay={0.4} className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-white">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.name} delay={0.1 * index}>
                                <Card className="h-full bg-gray-800/60 backdrop-blur-sm border-gray-700 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col group">
                  <CardHeader className="text-center flex-shrink-0 pb-8">
                    <div className="flex justify-center mb-6">
                      <div className="h-72 w-72 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src={member.avatar} 
                          alt={member.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">{member.name}</CardTitle>
                    <CardDescription className="text-gray-400 font-medium text-lg">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-end pt-6">
                    <div className="flex justify-center space-x-4">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-muted"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a 
                          href={member.social.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-muted"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a 
                          href={`mailto:${member.social.email}`}
                          className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-muted"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                      {(member.social as any).website && (
                        <a 
                          href={(member.social as any).website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-muted"
                        >
                          <Globe className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
          </ScrollAnimation>


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team; 