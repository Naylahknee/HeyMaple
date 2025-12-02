import { Link } from "wouter";
import heroBg from "@assets/generated_images/abstract_collaboration_hero_background.png";
import { Button } from "@/components/ui/button";
import { MODES } from "@/lib/mockData";
import { ModeBadge } from "@/components/ModeBadge";
import { MapleLeafIcon } from "@/components/MapleLeafIcon";
import { 
  ArrowRight, CheckCircle2, Users,
  Clock, UserX, TrendingDown, GraduationCap, Briefcase,
  Code, Mic, LineChart, Palette, Stethoscope, Scale,
  UserPlus, Network, TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Collaboration Background" 
            className="w-full h-full object-cover opacity-90" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/95 backdrop-blur-[2px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New: The Psychology-Based Matching Engine
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground mb-6">
              Stop Guessing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                Start Branching Out.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Branch out with alumni mentors, professors, and cross-major collaborators before graduation. Build your professional network while you're still growing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/role-selection">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90" data-testid="button-join-maple">
                  Join Hey Maple <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/dashboard">
                 <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/5">
                   View Demo Dashboard
                 </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">The Challenge</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              The Networking<br />
              <span className="text-leaf">Timing Problem</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Most students wait until graduation to start branching out and networking, missing crucial opportunities for mentorship, collaboration, and career growth during their college years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Too Late to Branch Out</h3>
              <p className="text-muted-foreground">
                Most students only branch out to alumni networks after graduation, when they're competing with thousands of other new grads.
              </p>
            </div>

            <div className="p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                <UserX size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Forced Connections</h3>
              <p className="text-muted-foreground">
                Traditional networking events feel artificial and transactional, not genuine relationship building.
              </p>
            </div>

            <div className="p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <TrendingDown size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Missed Opportunities</h3>
              <p className="text-muted-foreground">
                Students miss out on mentorship, internships, and collaborations that could shape their entire career path.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center bg-primary/5 border border-primary/10 rounded-2xl p-8">
            <p className="text-4xl font-bold text-primary mb-2">87% of Students</p>
            <p className="text-lg text-muted-foreground">wish they had started branching out earlier in their college career</p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">The Solution</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Natural Growth,<br />
                <span className="text-leaf">Real Connections</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Hey Maple creates organic opportunities for students to branch out with alumni, professors, and peers. Connect naturally while you're still learning and growing.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Alumni Mentorship</h3>
                    <p className="text-muted-foreground">Get matched with alumni in your field who are excited to guide and support current students.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Cross-Major Collaboration</h3>
                    <p className="text-muted-foreground">Work on projects with students from different majors to build diverse skills and perspectives.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Early Career Advantage</h3>
                    <p className="text-muted-foreground">Build your professional network before graduation to access hidden job markets and opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 p-8 flex items-center justify-center">
                <div className="bg-card shadow-2xl rounded-xl p-8 max-w-sm w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <MapleLeafIcon size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Growth Focused</div>
                      <div className="text-sm text-muted-foreground">Organic connections</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-muted rounded w-3/4"></div>
                    <div className="h-2 bg-muted rounded w-full"></div>
                    <div className="h-2 bg-muted rounded w-5/6"></div>
                  </div>
                  <div className="mt-6 pt-6 border-t flex justify-between items-center">
                    <div className="text-sm font-medium">Network Strength</div>
                    <div className="text-green-500 font-bold">+124%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works + 5 Modes Integrated */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">The Process</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How to<br />
              <span className="text-leaf">Branch Out</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to start branching out and building your professional network. Discover your collaboration style and find your perfect teammates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">1</div>
              <div className="mb-6 mt-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <UserPlus size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Create Your Profile</h3>
              <p className="text-center text-muted-foreground mb-4">
                Share your major, interests, and working style. Our algorithm identifies which of the 5 collaboration modes helps you branch out most effectively.
              </p>
              <div className="text-xs text-muted-foreground italic text-center">
                Discover: Architect, Builder, Connector, Refiner, or Visionary
              </div>
            </div>

            <div className="relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">2</div>
              <div className="mb-6 mt-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Network size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Join a Branch & Find Your People</h3>
              <p className="text-center text-muted-foreground mb-4">
                Choose from 6 branches: Tech, Business, Creative, Healthcare, Law, and Media. Branch out to meet alumni, professors, mentors, and peers who share your interests.
              </p>
              <div className="text-xs text-muted-foreground italic text-center">
                6 industry branches to explore
              </div>
            </div>

            <div className="relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">3</div>
              <div className="mb-6 mt-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <TrendingUp size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Get Matched & Start Collaborating</h3>
              <p className="text-center text-muted-foreground mb-4">
                Our matching engine finds complementary teammates within your branch. Build dream teams with people who fill your gaps and amplify your strengths.
              </p>
              <div className="text-xs text-muted-foreground italic text-center">
                Psychology-based compatibility scoring
              </div>
            </div>
          </div>

          {/* 5 Modes Preview */}
          <div className="mb-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Your Collaboration Mode</h3>
              <p className="text-muted-foreground">Which type of collaborator are you?</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Object.values(MODES).map((mode, idx) => (
                <motion.div 
                  key={mode.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 rounded-xl border bg-card hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="mb-3">
                    <ModeBadge mode={mode.id} size="md" />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground italic mb-3 min-h-[32px]">
                    "{mode.tagline}"
                  </p>
                  <ul className="space-y-1.5">
                    {mode.strengths.slice(0, 2).map(strength => (
                      <li key={strength} className="text-xs flex items-start gap-1.5">
                        <CheckCircle2 size={12} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Branch - Communities */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">Communities</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Find Your<br />
              <span className="text-leaf">Branch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Pick a skill-based branch where students, alumni, professors, and mentors collaborate, share knowledge, and build meaningful professional relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Code, name: "Tech Branch", desc: "Branch out with software engineers, data scientists, and tech entrepreneurs", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/30" },
              { icon: Mic, name: "Media Branch", desc: "Branch out with journalists, content creators, and media professionals", color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-950/30" },
              { icon: LineChart, name: "Business Branch", desc: "Branch out with consultants, finance professionals, and startup founders", color: "text-green-500", bg: "bg-green-50 dark:bg-green-950/30" },
              { icon: Palette, name: "Creative Branch", desc: "Branch out with designers, artists, and creative directors", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950/30" },
              { icon: Stethoscope, name: "Healthcare Branch", desc: "Branch out with doctors, researchers, and healthcare innovators", color: "text-red-500", bg: "bg-red-50 dark:bg-red-950/30" },
              { icon: Scale, name: "Law Branch", desc: "Branch out with lawyers, judges, and legal professionals", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/30" },
            ].map((branch, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-xl border hover:shadow-md transition-shadow bg-background">
                <div className={`w-12 h-12 rounded-xl ${branch.bg} ${branch.color} flex items-center justify-center shrink-0`}>
                  <branch.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{branch.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{branch.desc} and mentors.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Projects Fail - The Matching System */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Why Collaborations Fail<br />
              <span className="text-leaf">When You Branch Out</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Incompatible Collaboration Styles</h3>
                  <p className="text-muted-foreground">
                    When you branch out, pairing two "Architects" together leads to endless planning and no building. Two "Refiners" means nothing ever ships.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                  <MapleLeafIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Hey Maple Solution</h3>
                  <p className="text-muted-foreground">
                    Our psychology-based matching identifies your collaboration mode and pairs you with complementary teammates within your branch—people who fill your gaps.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card border rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6 border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-sm font-bold">A</div>
                  <div>
                    <div className="font-bold">Architect</div>
                    <div className="text-xs text-muted-foreground">Visionary</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-500">+</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-sm font-bold">B</div>
                  <div>
                    <div className="font-bold">Builder</div>
                    <div className="text-xs text-muted-foreground">Executor</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-2">
                  94% Compatibility
                </div>
                <p className="text-sm text-muted-foreground">
                  "The Dream Team" - Architect provides vision, Builder executes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-24 text-center container mx-auto px-4">
         <h2 className="text-4xl font-heading font-bold mb-6">Ready to branch out and find your people?</h2>
         <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
           Sign up with your USC email to branch out with alumni, professors, mentors, and peers. Get matched with your perfect team in minutes.
         </p>
         <Link href="/register">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg bg-primary hover:bg-primary/90">
              Register for Free
            </Button>
         </Link>
      </section>
    </div>
  );
}
