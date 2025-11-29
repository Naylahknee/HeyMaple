import { Link } from "wouter";
import heroBg from "@assets/generated_images/abstract_collaboration_hero_background.png";
import { Button } from "@/components/ui/button";
import { MODES } from "@/lib/mockData";
import { ModeBadge } from "@/components/ModeBadge";
import { ArrowRight, CheckCircle2, Users, Zap, Sprout, Network, Building2, Palette, Stethoscope, Scale } from "lucide-react";
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
              Join the Beta Launch
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground mb-6">
              Where Students <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                Branch Out
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with alumni mentors and cross-major collaborators before graduation. Build your professional network while you're still growing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90">
                  Join the Beta <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/dashboard">
                 <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/5">
                   Learn More
                 </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary tracking-wider uppercase mb-2">The Challenge</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">The Networking Timing Problem</h2>
            <p className="text-lg text-muted-foreground">
              Most students wait until graduation to start networking, missing crucial opportunities for mentorship, collaboration, and career growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6 rounded-2xl bg-muted/30 border hover:shadow-md transition-all">
               <h3 className="text-xl font-bold mb-3">Too Late</h3>
               <p className="text-muted-foreground">Most students only access alumni networks after graduation, when they're competing with thousands of other new grads.</p>
             </div>
             <div className="p-6 rounded-2xl bg-muted/30 border hover:shadow-md transition-all">
               <h3 className="text-xl font-bold mb-3">Forced Connections</h3>
               <p className="text-muted-foreground">Traditional networking events feel artificial and transactional, not genuine relationship building.</p>
             </div>
             <div className="p-6 rounded-2xl bg-muted/30 border hover:shadow-md transition-all">
               <h3 className="text-xl font-bold mb-3">Missed Opportunities</h3>
               <p className="text-muted-foreground">Students miss out on mentorship, internships, and collaborations that could shape their entire career path.</p>
             </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-foreground">
              <span className="text-primary text-4xl block mb-2">87% of Students</span>
              wish they had started networking earlier in their college career
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm font-bold text-primary tracking-wider uppercase mb-2">The Solution</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Natural Growth, Real Connections</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hey Maple creates organic networking opportunities that feel natural, not forced. Connect with alumni and peers while you're still learning and growing.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Alumni Mentorship</h3>
                  <p className="text-muted-foreground">Get matched with alumni in your field who are excited to guide current students.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Cross-Major Collaboration</h3>
                  <p className="text-muted-foreground">Work on projects with students from different majors to build diverse skills.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <Sprout size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Early Career Advantage</h3>
                  <p className="text-muted-foreground">Build your professional network before graduation to access hidden job markets.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Reuse the compatibility card but maybe adapt it or keep it as the "Secret Sauce" visual */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card border rounded-2xl p-8 shadow-xl">
               <h3 className="text-xl font-bold mb-6 text-center">Powered by Psychology</h3>
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border text-center">
                    <div className="text-2xl mb-2">🧠</div>
                    <div className="font-semibold">Working Styles</div>
                    <div className="text-xs text-muted-foreground">5 Core Archetypes</div>
                 </div>
                 <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border text-center">
                    <div className="text-2xl mb-2">🤝</div>
                    <div className="font-semibold">Compatibility</div>
                    <div className="text-xs text-muted-foreground">Smart Matching</div>
                 </div>
               </div>
               <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    We use behavioral psychology to match you with the right people for your goals.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Communities / Branches Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Communities</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Find Your Branch</h2>
            <p className="text-lg text-muted-foreground">
              Join skill-based communities where students and alumni collaborate, share knowledge, and build meaningful professional relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Tech Branch", icon: <Users className="text-blue-500" />, desc: "Connect with software engineers, data scientists, and tech entrepreneurs" },
              { name: "Media Branch", icon: <Network className="text-purple-500" />, desc: "Network with journalists, content creators, and media professionals" },
              { name: "Business Branch", icon: <Building2 className="text-orange-500" />, desc: "Meet consultants, finance professionals, and startup founders" },
              { name: "Creative Branch", icon: <Palette className="text-pink-500" />, desc: "Collaborate with designers, artists, and creative directors" },
              { name: "Healthcare Branch", icon: <Stethoscope className="text-green-500" />, desc: "Connect with doctors, researchers, and healthcare innovators" },
              { name: "Law Branch", icon: <Scale className="text-slate-500" />, desc: "Network with lawyers, judges, and legal professionals" }
            ].map((branch, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group">
                <div className="mt-1 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-950 transition-colors">
                  {branch.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{branch.name}</h3>
                  <p className="text-sm text-muted-foreground">{branch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-24 bg-muted/30">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-sm font-bold text-primary tracking-wider uppercase mb-2">The Process</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">How It Works</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">01</div>
                  <h3 className="text-xl font-bold mb-3">Create Your Profile</h3>
                  <p className="text-muted-foreground">Share your major, interests, and career goals to get matched with relevant mentors and collaborators.</p>
               </div>
               <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">02</div>
                  <h3 className="text-xl font-bold mb-3">Join Branches</h3>
                  <p className="text-muted-foreground">Connect with like-minded students and alumni in skill-based communities that match your interests.</p>
               </div>
               <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-6">03</div>
                  <h3 className="text-xl font-bold mb-3">Grow Your Network</h3>
                  <p className="text-muted-foreground">Build meaningful relationships through mentorship, collaboration, and organic networking opportunities.</p>
               </div>
            </div>
         </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 text-center container mx-auto px-4">
         <h2 className="text-4xl font-heading font-bold mb-6">Join the Beta Launch</h2>
         <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
           Be among the first students to access Hey Maple. Get early access to exclusive mentorship opportunities and cross-major collaborations.
         </p>
         <Link href="/register">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg bg-primary hover:bg-primary/90">
              Join Waitlist
            </Button>
         </Link>
      </section>
    </div>
  );
}

