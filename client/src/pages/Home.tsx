import { Link } from "wouter";
import heroBg from "@assets/generated_images/abstract_collaboration_hero_background.png";
import { Button } from "@/components/ui/button";
import { MODES } from "@/lib/mockData";
import { ModeBadge } from "@/components/ModeBadge";
import { ArrowRight, CheckCircle2, Users, Zap } from "lucide-react";
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
              Hey Maple matches you with teammates based on <strong>how you work</strong>, not just what you know.
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
      
      {/* CTA */}
      <section className="py-24 text-center container mx-auto px-4">
         <h2 className="text-4xl font-heading font-bold mb-6">Ready to find your people?</h2>
         <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
           Sign up with your USC email and get matched with your perfect teammates in minutes.
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
