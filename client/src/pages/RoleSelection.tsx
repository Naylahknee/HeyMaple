import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Welcome to Hey Maple
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
                <Card
                  className="h-full p-8 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 flex flex-col justify-between"
                  onClick={() => setLocation(`/assessment?role=${role.id}`)}
                  data-testid={`role-card-${role.id}`}
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{role.title}</h2>
                    <p className="text-muted-foreground mb-6">{role.description}</p>
                  </div>
                  <Button 
                    className="w-full rounded-lg"
                    data-testid={`button-select-${role.id}`}
                  >
                    Continue as {role.title}
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
