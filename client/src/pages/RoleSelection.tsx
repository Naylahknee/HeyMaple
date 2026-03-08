import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function RoleSelection() {
  const [_, setLocation] = useLocation();

  const roles = [
    {
      id: "Student",
      title: "Student",
      description: "Find teammates, mentors, and collaboration opportunities while pursuing your degree",
      icon: GraduationCap,
    },
    {
      id: "Alumni",
      title: "Alumni/Mentor",
      description: "Guide current students, refer job opportunities, and build meaningful professional relationships",
      icon: Briefcase,
    },
    {
      id: "Faculty",
      title: "Faculty/Professor",
      description: "Connect with students, facilitate collaborations, and strengthen your academic community",
      icon: Users,
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

        <div className="grid md:grid-cols-3 gap-6">
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
                  className="card-maple h-full cursor-pointer hover:-translate-y-1 transition-all border-2 border-transparent hover:border-primary/30 flex flex-col justify-between"
                  onClick={() => setLocation(`/assessment?role=${role.id}`)}
                  data-testid={`role-card-${role.id}`}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 text-white">
                      <Icon size={28} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{role.title}</h2>
                    <p className="text-[15px] text-muted-foreground mb-6 leading-relaxed">{role.description}</p>
                  </div>
                  <Button 
                    className="w-full"
                    data-testid={`button-select-${role.id}`}
                  >
                    Continue as {role.title}
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
