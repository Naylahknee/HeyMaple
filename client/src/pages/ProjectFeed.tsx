import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Calendar, Briefcase } from "lucide-react";

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Capstone - Streaming Analysis App",
    owner: "Jordan Smith",
    program: "Digital Media Management",
    needs: ["Coder (React, Firebase)"],
    commitment: "2-3 weeks | Evenings",
    type: "Capstone",
    description: "Building a dashboard to analyze streaming trends across platforms."
  },
  {
    id: 2,
    title: "Thesis - Social Media in Education",
    owner: "Alex Chen",
    program: "Education",
    needs: ["Data Analysis (R/SPSS)"],
    commitment: "Short sprint",
    type: "Thesis",
    description: "Analyzing survey data from 500 local high school students."
  },
  {
    id: 3,
    title: "Startup - Campus Food Delivery",
    owner: "Sam Wilson",
    program: "Business",
    needs: ["UX Designer", "Marketing Strategy"],
    commitment: "Ongoing",
    type: "Startup",
    description: "Creating a peer-to-peer food delivery network for dorms."
  }
];

export default function ProjectFeed() {
  const [_, setLocation] = useLocation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [offerOpen, setOfferOpen] = useState(false);
  const [offerMessage, setOfferMessage] = useState("");

  const handleOfferClick = (project: any) => {
    setSelectedProject(project);
    setOfferMessage(`Hi ${project.owner.split(' ')[0]}, I saw your ${project.type} project and I can help with ${project.needs[0]}. I'm available evenings. Want to hop on a call or chat async?`);
    setOfferOpen(true);
  };

  const sendOffer = () => {
    setOfferOpen(false);
    alert("Offer sent!");
    setLocation("/matches");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <Button variant="ghost" onClick={() => setLocation("/dashboard")}>← Dashboard</Button>
            <h1 className="text-3xl font-heading font-bold mt-4">Projects Needing Help</h1>
            <p className="text-muted-foreground">Matches based on your skills: React, UX</p>
          </div>
          <Button variant="outline" onClick={() => setLocation("/helper-setup")}>Edit Profile</Button>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Badge variant="secondary" className="cursor-pointer">All</Badge>
          <Badge variant="outline" className="cursor-pointer">Capstone</Badge>
          <Badge variant="outline" className="cursor-pointer">Thesis</Badge>
          <Badge variant="outline" className="cursor-pointer">Short-term</Badge>
        </div>

        <div className="grid gap-6">
          {MOCK_PROJECTS.map(project => (
            <Card key={project.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{project.type}</Badge>
                    <span className="text-sm text-muted-foreground">{project.program}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 font-medium text-blue-600">
                      <Briefcase size={16} /> Need: {project.needs.join(", ")}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock size={16} /> {project.commitment}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2 min-w-[120px]">
                  <Button onClick={() => handleOfferClick(project)}>Offer Help</Button>
                  <Button variant="outline">Save</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={offerOpen} onOpenChange={setOfferOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Offer Help to {selectedProject?.owner}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Textarea 
              value={offerMessage}
              onChange={(e) => setOfferMessage(e.target.value)}
              className="min-h-[150px]"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOfferOpen(false)}>Cancel</Button>
            <Button onClick={sendOffer}>Send Offer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
