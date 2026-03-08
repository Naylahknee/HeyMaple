import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Users, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";

export default function RoleSelection() {
  const [_, setLocation] = useLocation();

  const roles = [
    {
      id: "Student",
      title: "Student",
      buttonLabel: "Continue as Student",
      description: "Find teammates, mentors, and collaboration opportunities while pursuing your degree",
      icon: GraduationCap,
      highlight: false,
    },
    {
      id: "Alumni",
      title: "Alumni/Mentor",
      buttonLabel: "Continue as Alumni",
      description: "Guide current students, refer job opportunities, and build meaningful professional relationships",
      icon: Briefcase,
      highlight: false,
    },
    {
      id: "Faculty",
      title: "Faculty/Professor",
      buttonLabel: "Continue as Faculty",
      description: "Connect with students, facilitate collaborations, and strengthen your academic community",
      icon: Users,
      highlight: false,
    },
    {
      id: "BetaTester",
      title: "Beta Tester",
      buttonLabel: "Join as Beta Tester",
      description: "Help us improve Hey Maple by testing features and leaving feedback. Open to all .edu emails",
      icon: FlaskConical,
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="content-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
            Welcome to<br />
            <span className="text-leaf">Hey Maple</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Select your role to get started and discover your collaboration style
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`card-maple h-full cursor-pointer hover:-translate-y-1 transition-all border-2 flex flex-col justify-between ${
                    role.highlight
                      ? "border-leaf/30 hover:border-leaf/60"
                      : "border-transparent hover:border-primary/30"
                  }`}
                  onClick={() => setLocation(`/assessment?role=${role.id}`)}
                  data-testid={`role-card-${role.id}`}
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white ${
                      role.highlight ? "bg-leaf" : "bg-primary"
                    }`}>
                      <Icon size={28} />
                    </div>
                    <h2 className="text-xl font-bold mb-3">{role.title}</h2>
                    <p className="text-[15px] text-muted-foreground mb-6 leading-relaxed">{role.description}</p>
                  </div>
                  {role.highlight && (
                    <div className="text-xs font-semibold text-leaf bg-leaf/10 rounded-full px-3 py-1 w-fit mb-4">
                      Any .edu email welcome
                    </div>
                  )}
                  <Button 
                    className={`w-full text-[13px] px-4 ${role.highlight ? "bg-leaf hover:bg-leaf/90" : ""}`}
                    data-testid={`button-select-${role.id}`}
                  >
                    {role.buttonLabel}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
