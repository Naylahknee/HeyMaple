import { Link } from "wouter";
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

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerCard = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: index * 0.1 },
});

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="content-width text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-[40px] md:text-[56px] font-extrabold text-foreground leading-[1.1] mb-6">
              Where Students<br />
              <span className="text-leaf">Branch Out</span>
            </h1>
            
            <p className="text-lg md:text-xl font-medium text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Branch out with alumni mentors, professors, and cross-major collaborators before graduation. Build your professional network while you're still growing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/role-selection">
                <Button size="lg" className="px-8 shadow-md hover:shadow-lg" data-testid="button-join-maple">
                  Join the Beta <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* The Challenge */}
      <section className="section-padding bg-white">
        <div className="content-width">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="eyebrow mb-3">THE CHALLENGE</div>
            <h2 className="section-headline mb-4">
              The Networking<br />
              <span className="text-leaf">Timing Problem</span>
            </h2>
            <p className="section-body max-w-2xl mx-auto">
              Most students wait until graduation to start branching out, missing crucial opportunities for mentorship, collaboration, and career growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { icon: Clock, title: "Too Late to Branch Out", desc: "Most students only branch out to alumni networks after graduation, when they're competing with thousands of other new grads." },
              { icon: UserX, title: "Forced Connections", desc: "Traditional networking events feel artificial and transactional, not genuine relationship building." },
              { icon: TrendingDown, title: "Missed Opportunities", desc: "Students miss out on mentorship, internships, and collaborations that could shape their entire career path." },
              { icon: Users, title: "No Compatibility Insight", desc: "You're matched on skills alone, with no understanding of how well you'll actually work together." },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                {...staggerCard(idx)}
                className="card-maple flex gap-4"
              >
                <div className="shrink-0">
                  <item.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* The Solution */}
      <section className="section-padding bg-white">
        <div className="content-width">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="eyebrow mb-3">THE SOLUTION</div>
            <h2 className="section-headline mb-4">
              Natural Growth,<br />
              <span className="text-leaf">Real Connections</span>
            </h2>
            <p className="section-body max-w-2xl mx-auto">
              Hey Maple creates organic opportunities for students to branch out with alumni, professors, and peers through psychology-based matching.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: GraduationCap, title: "Alumni Mentorship", desc: "Get matched with alumni in your field who are excited to guide and support current students." },
              { icon: Users, title: "Cross-Major Collaboration", desc: "Work on projects with students from different majors to build diverse skills and perspectives." },
              { icon: Briefcase, title: "Early Career Advantage", desc: "Build your professional network before graduation to access hidden job markets and opportunities." },
              { icon: MapleLeafIcon, title: "Psychology-Based Matching", desc: "Our collaboration mode system ensures you're paired with complementary teammates, not just similar ones." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...staggerCard(idx)}
                className="card-maple flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Communities */}
      <section className="section-padding bg-white">
        <div className="content-width">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="eyebrow mb-3">COMMUNITIES</div>
            <h2 className="section-headline mb-4">
              Find Your<br />
              <span className="text-leaf">Branch</span>
            </h2>
            <p className="section-body max-w-2xl mx-auto">
              Pick a skill-based branch where students, alumni, professors, and mentors collaborate and build meaningful professional relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Code, name: "Tech", desc: "Software engineers, data scientists, and tech entrepreneurs" },
              { icon: Mic, name: "Media", desc: "Journalists, content creators, and media professionals" },
              { icon: LineChart, name: "Business", desc: "Consultants, finance professionals, and startup founders" },
              { icon: Palette, name: "Creative", desc: "Designers, artists, and creative directors" },
              { icon: Stethoscope, name: "Healthcare", desc: "Doctors, researchers, and healthcare innovators" },
              { icon: Scale, name: "Law", desc: "Lawyers, judges, and legal professionals" },
            ].map((branch, idx) => (
              <motion.div 
                key={idx}
                {...staggerCard(idx)}
                className="card-maple flex items-start gap-4"
              >
                <div className="shrink-0">
                  <branch.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{branch.name}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{branch.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="content-width">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <div className="eyebrow mb-3">THE PROCESS</div>
            <h2 className="section-headline mb-4">
              How to<br />
              <span className="text-leaf">Branch Out</span>
            </h2>
            <p className="section-body max-w-2xl mx-auto">
              Three simple steps to start branching out and building your professional network.
            </p>
          </motion.div>

          <div className="space-y-12 max-w-xl mx-auto">
            {[
              { num: "01", icon: UserPlus, title: "Create Your Profile", desc: "Share your major, interests, and working style. Our algorithm identifies your collaboration mode." },
              { num: "02", icon: Network, title: "Join a Branch", desc: "Choose from 6 branches: Tech, Business, Creative, Healthcare, Law, and Media." },
              { num: "03", icon: TrendingUp, title: "Get Matched", desc: "Our matching engine finds complementary teammates who fill your gaps and amplify your strengths." },
            ].map((step, idx) => (
              <motion.div key={idx} {...staggerCard(idx)} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 5 Modes Preview */}
      <section className="section-padding bg-white">
        <div className="content-width">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="section-headline mb-4">
              Your Collaboration<br />
              <span className="text-leaf">Mode</span>
            </h2>
            <p className="section-body">Which type of collaborator are you?</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.values(MODES).map((mode, idx) => (
              <motion.div 
                key={mode.id}
                {...staggerCard(idx)}
                className="card-maple text-center hover:-translate-y-1 transition-transform"
              >
                <div className="mb-3 flex justify-center">
                  <ModeBadge mode={mode.id} size="md" />
                </div>
                <p className="text-xs font-medium text-muted-foreground italic mb-3 min-h-[32px]">
                  "{mode.tagline}"
                </p>
                <ul className="space-y-1.5 text-left">
                  {mode.strengths.slice(0, 2).map(strength => (
                    <li key={strength} className="text-xs flex items-start gap-1.5">
                      <CheckCircle2 size={12} className="text-leaf mt-0.5 shrink-0" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Waitlist CTA */}
      <section className="section-padding bg-white">
        <div className="content-width">
          <motion.div {...fadeInUp}>
            <div className="card-maple text-center max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                Ready to branch out<br />
                <span className="text-leaf">and find your people?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Sign up with your school email to branch out with alumni, professors, mentors, and peers.
              </p>
              <Link href="/register">
                <Button size="lg" className="w-full shadow-md">
                  Join Waitlist
                </Button>
              </Link>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-leaf" /> Free to join</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-leaf" /> Any .edu email</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-leaf" /> Launch Spring 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
