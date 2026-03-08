import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Briefcase, ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen bg-white py-8 md:py-12">
      <div className="content-width max-w-4xl">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <Button variant="ghost" onClick={() => setLocation("/dashboard")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Dashboard
            </Button>
            <h1 className="text-2xl md:text-3xl font-extrabold mt-4">
              Projects Needing <span className="text-leaf">Help</span>
            </h1>
            <p className="text-muted-foreground">Matches based on your skills: React, UX</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => setLocation("/helper-setup")}>Edit Profile</Button>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Badge variant="secondary" className="cursor-pointer rounded-full px-4 py-1">All</Badge>
          <Badge variant="outline" className="cursor-pointer rounded-full px-4 py-1">Capstone</Badge>
          <Badge variant="outline" className="cursor-pointer rounded-full px-4 py-1">Thesis</Badge>
          <Badge variant="outline" className="cursor-pointer rounded-full px-4 py-1">Short-term</Badge>
        </div>

        <div className="grid gap-6">
          {MOCK_PROJECTS.map(project => (
            <div key={project.id} className="card-maple hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="rounded-full">{project.type}</Badge>
                    <span className="text-sm text-muted-foreground">{project.program}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-[15px]">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 font-medium text-primary">
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
            </div>
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
