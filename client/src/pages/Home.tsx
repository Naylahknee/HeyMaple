import { Link } from "wouter";
import heroBg from "@assets/generated_images/abstract_collaboration_hero_background.png";
import { Button } from "@/components/ui/button";
import { MODES } from "@/lib/mockData";
import { ModeBadge } from "@/components/ModeBadge";
import { 
  ArrowRight, CheckCircle2, Users, Zap, 
  Clock, UserX, TrendingDown, Sprout, GraduationCap, Briefcase,
  Code, Mic, LineChart, Palette, Stethoscope, Scale,
  UserPlus, Network, TrendingUp, Layout
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
                Start Collaborating.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with alumni mentors and cross-major collaborators before graduation. Build your professional network while you're still growing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90">
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

      {/* NEW SECTION: The Challenge (The Networking Timing Problem) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">The Challenge</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">The Networking Timing Problem</h2>
            <p className="text-lg text-muted-foreground">
              Most students wait until graduation to start networking, missing crucial opportunities for mentorship, collaboration, and career growth during their college years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl border bg-card/50 hover:bg-card transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Too Late</h3>
              <p className="text-muted-foreground">
                Most students only access alumni networks after graduation, when they're competing with thousands of other new grads.
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
            <p className="text-lg text-muted-foreground">wish they had started networking earlier in their college career</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: The Solution (Natural Growth, Real Connections) */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">The Solution</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Natural Growth, Real Connections</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Hey Maple creates organic networking opportunities that feel natural, not forced. Connect with alumni and peers while you're still learning and growing.
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
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Sprout size={24} />
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

      {/* NEW SECTION: Communities (Find Your Branch) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">Communities</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Find Your Branch</h2>
            <p className="text-lg text-muted-foreground">
              Join skill-based communities where students and alumni collaborate, share knowledge, and build meaningful professional relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Code, name: "Tech Branch", desc: "Connect with software engineers, data scientists, and tech entrepreneurs", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/30" },
              { icon: Mic, name: "Media Branch", desc: "Network with journalists, content creators, and media professionals", color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-950/30" },
              { icon: LineChart, name: "Business Branch", desc: "Meet consultants, finance professionals, and startup founders", color: "text-green-500", bg: "bg-green-50 dark:bg-green-950/30" },
              { icon: Palette, name: "Creative Branch", desc: "Collaborate with designers, artists, and creative directors", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950/30" },
              { icon: Stethoscope, name: "Healthcare Branch", desc: "Connect with doctors, researchers, and healthcare innovators", color: "text-red-500", bg: "bg-red-50 dark:bg-red-950/30" },
              { icon: Scale, name: "Law Branch", desc: "Network with lawyers, judges, and legal professionals", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/30" },
            ].map((branch, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-xl border hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${branch.bg} ${branch.color} flex items-center justify-center shrink-0`}>
                  <branch.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{branch.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{branch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">The 5 Collaboration Modes</h2>
            <p className="text-lg text-muted-foreground">
              Every great team needs a mix of these archetypes. Which one are you?
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Object.values(MODES).map((mode, idx) => (
              <motion.div 
                key={mode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="mb-4">
                  <ModeBadge mode={mode.id} size="lg" />
                </div>
                <p className="text-sm font-medium text-muted-foreground italic mb-4 min-h-[40px]">
                  "{mode.tagline}"
                </p>
                <ul className="space-y-2">
                  {mode.strengths.slice(0, 2).map(strength => (
                    <li key={strength} className="text-sm flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Why Projects Fail</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Incompatible Styles</h3>
                  <p className="text-muted-foreground">
                    Putting two "Architects" together leads to endless planning and no building. Two "Refiners" means nothing ever ships.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Solution</h3>
                  <p className="text-muted-foreground">
                    Hey Maple identifies your natural working style and pairs you with complementary teammates who fill your gaps.
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
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">A</div>
                  <div>
                    <div className="font-bold">Architect</div>
                    <div className="text-xs text-muted-foreground">Visionary</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-500">+</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">B</div>
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
      
      {/* NEW SECTION: The Process (How It Works) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">The Process</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Getting started is simple. Follow these three steps to begin building your professional network while you're still in school.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">1</div>
              <div className="mb-6 mt-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <UserPlus size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Create Your Profile</h3>
              <p className="text-center text-muted-foreground">
                Share your major, interests, and career goals to get matched with relevant mentors and collaborators.
              </p>
            </div>

            <div className="relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">2</div>
              <div className="mb-6 mt-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Network size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Join Branches</h3>
              <p className="text-center text-muted-foreground">
                Connect with like-minded students and alumni in skill-based communities that match your interests.
              </p>
            </div>

            <div className="relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">3</div>
              <div className="mb-6 mt-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <TrendingUp size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Grow Your Network</h3>
              <p className="text-center text-muted-foreground">
                Build meaningful relationships through mentorship, collaboration, and organic networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center container mx-auto px-4">
         <h2 className="text-4xl font-heading font-bold mb-6">Join the Beta Launch</h2>
         <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
           Be among the first USC students to access Hey Maple. Get early access to exclusive mentorship opportunities and cross-major collaborations.
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
