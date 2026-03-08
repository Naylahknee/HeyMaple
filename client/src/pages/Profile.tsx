import { useState } from "react";
import { User } from "@/lib/types";
import { ModeBadge } from "@/components/ModeBadge";
import { ChangeRoleDialog } from "@/components/ChangeRoleDialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Share2, ShieldAlert } from "lucide-react";
import profileAvatar from '@assets/generated_images/college-age_female_student_portrait.png';
import { toast } from "sonner";

export default function Profile() {
  const [isChangeRoleOpen, setIsChangeRoleOpen] = useState(false);
  
  const [user, setUser] = useState<User>({
    id: "me",
    email: "jordan@usc.edu",
    name: "Jordan Smith",
    major: "Computer Science",
    year: 2025,
    avatar: profileAvatar,
    mode: "Architect",
    secondaryMode: "Builder",
    modeConfidence: 85,
    skills: ["React", "TypeScript", "Node.js", "System Design", "UI/UX"],
    bio: "I love building scalable systems and thinking about the big picture. Looking for builders to help execute a new fintech idea.",
    accountType: "Student" as const,
  });

  const handleChangeRole = async (newRole: "Student" | "Faculty" | "Alumni", password: string) => {
    if (password.length < 6) {
      throw new Error("Invalid password");
    }
    
    setUser(prev => ({
      ...prev,
      accountType: newRole,
    }));
    
    toast.success(`Role changed to ${newRole}`);
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="content-width">
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="md:col-span-1 space-y-6">
            <div className="card-maple text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Avatar className="w-full h-full border-4 border-white shadow-lg">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-border">
                  <Pencil className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
              
              <h2 className="text-xl font-bold mb-1">{user.name}</h2>
              <p className="text-muted-foreground text-sm mb-4">{user.major}</p>
              
              <div className="flex justify-center mb-6">
                <ModeBadge mode={user.mode || "Architect"} />
              </div>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Role</div>
                <div className="text-sm font-medium mb-3 p-2 bg-white rounded-full border border-border">
                  {user.accountType}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setIsChangeRoleOpen(true)}
                  data-testid="button-change-role"
                >
                  <ShieldAlert className="w-4 h-4 mr-2" /> Change Role
                </Button>
              </div>
            </div>

            <div className="card-maple">
              <h3 className="font-bold mb-4">Verification</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-leaf">
                  <span className="w-5 h-5 rounded-full bg-leaf/10 flex items-center justify-center text-xs">&#10003;</span>
                  Student Email
                </li>
                <li className="flex items-center gap-2 text-leaf">
                  <span className="w-5 h-5 rounded-full bg-leaf/10 flex items-center justify-center text-xs">&#10003;</span>
                  Phone Number
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
             <div className="card-maple">
               <div className="flex justify-between items-start mb-6">
                 <h3 className="text-xl font-extrabold">About Me</h3>
                 <Button variant="ghost" size="icon"><Pencil className="w-4 h-4" /></Button>
               </div>
               <p className="text-muted-foreground leading-relaxed mb-6">
                 {user.bio}
               </p>
               
               <div className="mb-8">
                 <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Skills</h4>
                 <div className="flex flex-wrap gap-2">
                   {(user.skills || []).map(skill => (
                     <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-normal rounded-full">
                       {skill}
                     </Badge>
                   ))}
                   <Button variant="outline" size="sm" className="h-7 text-xs border-dashed">+ Add</Button>
                 </div>
               </div>

               <div>
                 <h4 className="font-bold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Availability</h4>
                 <div className="grid grid-cols-2 gap-4 text-sm">
                   <div className="p-3 bg-white rounded-2xl border border-border">
                     <span className="block text-muted-foreground text-xs mb-1">Hours / Week</span>
                     <span className="font-medium">10-15 Hours</span>
                   </div>
                   <div className="p-3 bg-white rounded-2xl border border-border">
                     <span className="block text-muted-foreground text-xs mb-1">Project Type</span>
                     <span className="font-medium">Semester Long</span>
                   </div>
                 </div>
               </div>
             </div>

             <div className="card-maple border-2 border-primary/20">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-extrabold">My Stats</h3>
                 <Button variant="ghost" size="sm"><Share2 className="w-4 h-4 mr-2" /> Share Profile</Button>
               </div>
               <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-white rounded-2xl border border-border">
                    <div className="text-3xl font-extrabold text-primary mb-1">85%</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase">Mode Confidence</div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-border">
                    <div className="text-3xl font-extrabold text-primary mb-1">4</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase">Projects Done</div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-border">
                    <div className="text-3xl font-extrabold text-leaf mb-1">5.0</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase">Avg Rating</div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      <ChangeRoleDialog
        isOpen={isChangeRoleOpen}
        onOpenChange={setIsChangeRoleOpen}
        currentRole={user.accountType || "Student"}
        onConfirm={handleChangeRole}
      />
    </div>
  );
}
