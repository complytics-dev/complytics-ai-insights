import React from "react";
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
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <ScrollAnimation className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-100">
              About Complytics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a team of innovators passionate about transforming how businesses approach 
              AI commissions tracking through intelligent automation and cutting-edge technology.
            </p>
          </ScrollAnimation>

          {/* Our Story Section */}
          <ScrollAnimation delay={0.2} className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">Our Story</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Complytics started with a conversation.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  My manager, the Controller at a 250-person B2B SaaS company, told me she was manually calculating 
                  commissions every single month. She had to pull data from Salesforce, rebuild logic in Excel, 
                  verify every payout, and respond to rep questions all by herself.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Then she passed the responsibility to me.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  What I expected to be a simple process turned out to be a mess. I saw firsthand how frustrating 
                  and fragile the system really was: slow, error-prone, and completely disconnected from how 
                  modern revenue teams operate.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  There were no tools streamlining the process end to end.
                </p>
                <div className="bg-cyan-900/30 rounded-xl p-6 my-8 border-l-4 border-cyan-400">
                  <blockquote className="text-lg italic text-gray-100 mb-4">
                    "Hearing that someone responsible for company-wide financial accuracy was stuck doing this 
                    manually just didn't sit right with me. There were no tools built to solve the full problem. 
                    So I decided to build one."
                  </blockquote>
                  <p className="font-semibold text-gray-100">— Rishab Motgi, Co-founder and CEO</p>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  That handoff became the spark. I pulled together a team of builders I trusted from engineers 
                  to operators and we got to work. We didn't want to patch one part of the process. We wanted 
                  to fix the whole thing.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Complytics is the first AI-powered platform built to handle sales compensation end to end. 
                  From parsing comp plan PDFs, to modeling payout logic, validating deals, syncing with Salesforce, 
                  and delivering real-time visibility to reps and finance—Complytics replaces spreadsheets with clarity.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're a young team solving an old problem with speed, precision, and urgency.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Mission Statement */}
          <ScrollAnimation delay={0.3} className="mb-16">
            <div className="bg-cyan-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-700">
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">Our Mission</h2>
              <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
                At Complytics, our mission is to empower SaaS enterprises to drive revenue growth through precise, 
                transparent, and scalable sales compensation workflows. From plan implementation to payout execution, 
                our AI-native platform is built to automate, validate, and compensate, turning compensation into a 
                strategic growth driver.
              </p>
            </div>
          </ScrollAnimation>

          {/* Meet the Team Section */}
          <ScrollAnimation delay={0.4} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.name} delay={0.1 * index}>
                                <Card className="h-full bg-white/15 backdrop-blur-sm border-gray-600/50 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col group">
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
                    <CardTitle className="text-2xl font-bold text-gray-100 mb-2">{member.name}</CardTitle>
                    <CardDescription className="text-cyan-400 font-medium text-lg">
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
                          className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-gray-800/50"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a 
                          href={member.social.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-gray-800/50"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a 
                          href={`mailto:${member.social.email}`}
                          className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-gray-800/50"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      )}
                      {(member.social as any).website && (
                        <a 
                          href={(member.social as any).website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-gray-800/50"
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