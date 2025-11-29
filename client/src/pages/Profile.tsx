import { User } from "@/lib/types";
import { ModeBadge } from "@/components/ModeBadge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Settings, Share2 } from "lucide-react";
import profileAvatar from '@assets/generated_images/college-age_female_student_portrait.png';

export default function Profile() {
  // Mock logged in user
  const user: User = {
    id: "me",
    name: "Jordan Smith",
    major: "Computer Science",
    year: 2025,
    avatar: profileAvatar,
    mode: "Architect",
    secondaryMode: "Builder",
    modeConfidence: 85,
    skills: ["React", "TypeScript", "Node.js", "System Design", "UI/UX"],
    bio: "I love building scalable systems and thinking about the big picture. Looking for builders to help execute a new fintech idea."
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <Card className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Avatar className="w-full h-full border-4 border-background shadow-lg">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 bg-background p-1.5 rounded-full shadow-md border">
                  <Pencil className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
              
              <h2 className="text-xl font-bold mb-1">{user.name}</h2>
              <p className="text-muted-foreground text-sm mb-4">{user.major}</p>
              
              <div className="flex justify-center mb-6">
                <ModeBadge mode={user.mode} />
              </div>

              <div className="flex gap-2 justify-center">
                 <Button variant="outline" size="sm" className="w-full">
                   <Settings className="w-4 h-4 mr-2" /> Settings
                 </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Verification</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-green-600">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">✓</span>
                  Student Email
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">✓</span>
                  Phone Number
                </li>
              </ul>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
             <Card className="p-8">
               <div className="flex justify-between items-start mb-6">
                 <h3 className="text-xl font-heading font-bold">About Me</h3>
                 <Button variant="ghost" size="icon"><Pencil className="w-4 h-4" /></Button>
               </div>
               <p className="text-muted-foreground leading-relaxed mb-6">
                 {user.bio}
               </p>
               
               <div className="mb-8">
                 <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Skills</h4>
                 <div className="flex flex-wrap gap-2">
                   {user.skills.map(skill => (
                     <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-normal">
                       {skill}
                     </Badge>
                   ))}
                   <Button variant="outline" size="sm" className="h-7 text-xs border-dashed rounded-full">+ Add</Button>
                 </div>
               </div>

               <div>
                 <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Availability</h4>
                 <div className="grid grid-cols-2 gap-4 text-sm">
                   <div className="p-3 bg-muted/30 rounded-lg">
                     <span className="block text-muted-foreground text-xs mb-1">Hours / Week</span>
                     <span className="font-medium">10-15 Hours</span>
                   </div>
                   <div className="p-3 bg-muted/30 rounded-lg">
                     <span className="block text-muted-foreground text-xs mb-1">Project Type</span>
                     <span className="font-medium">Semester Long</span>
                   </div>
                 </div>
               </div>
             </Card>

             <Card className="p-8 bg-primary/5 border-primary/10">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-heading font-bold">My Stats</h3>
                 <Button variant="ghost" size="sm"><Share2 className="w-4 h-4 mr-2" /> Share Profile</Button>
               </div>
               <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">85%</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase">Mode Confidence</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase">Projects Done</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-1">5.0</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase">Avg Rating</div>
                  </div>
               </div>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
