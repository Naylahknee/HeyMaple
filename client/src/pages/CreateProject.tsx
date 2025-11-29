import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";
import { PROJECT_TYPES } from "@/lib/uscData";

export default function CreateProject() {
  const [_, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [projectData, setProjectData] = useState({
    title: "",
    type: "",
    program: "",
    stage: "",
    dueDate: "",
    roles: [] as { role: string; skills: string[]; time: string; compensation: string }[]
  });

  const [newRole, setNewRole] = useState({
    role: "",
    skills: "",
    time: "Short sprint (1-2 weeks)",
    compensation: "Unpaid / credit only"
  });

  const handleAddRole = () => {
    if (newRole.role && newRole.skills) {
      setProjectData(prev => ({
        ...prev,
        roles: [...prev.roles, { 
          ...newRole, 
          skills: newRole.skills.split(',').map(s => s.trim()) 
        }]
      }));
      setNewRole({ role: "", skills: "", time: "Short sprint (1-2 weeks)", compensation: "Unpaid / credit only" });
    }
  };

  const handleRemoveRole = (index: number) => {
    setProjectData(prev => ({
      ...prev,
      roles: prev.roles.filter((_, i) => i !== index)
    }));
  };

  // Wizard for "I don't know what I need"
  const [showWizard, setShowWizard] = useState(false);
  const [wizardAnswers, setWizardAnswers] = useState({
    workingOn: "",
    stuckOn: "",
    deadline: ""
  });

  const handleWizardSuggest = () => {
    const suggestions: any = [];
    if (wizardAnswers.stuckOn === "coding") {
      suggestions.push({ role: "Developer", skills: ["React", "Node.js"], time: "Ongoing", compensation: "Unpaid" });
    } else if (wizardAnswers.stuckOn === "design") {
      suggestions.push({ role: "Designer", skills: ["Figma", "UI/UX"], time: "Short sprint", compensation: "Unpaid" });
    } else {
      suggestions.push({ role: "Researcher", skills: ["Data Analysis"], time: "One-time feedback", compensation: "Unpaid" });
    }
    
    setProjectData(prev => ({
      ...prev,
      roles: [...prev.roles, ...suggestions]
    }));
    setShowWizard(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => setLocation("/dashboard")}>← Back to Dashboard</Button>
          <h1 className="text-3xl font-heading font-bold mt-4">
            {step === 1 ? "Create a Project" : "Define Your Needs"}
          </h1>
        </div>

        <Card className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <Label>Project Title</Label>
                <Input 
                  placeholder="e.g. Streaming Analysis App" 
                  value={projectData.title}
                  onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                />
              </div>

              <div>
                <Label>Project Type</Label>
                <Select onValueChange={(val) => setProjectData({...projectData, type: val})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROJECT_TYPES.map(p => (
                      <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Program / Major</Label>
                <Input 
                  placeholder="e.g. Digital Media Management" 
                  value={projectData.program}
                  onChange={(e) => setProjectData({...projectData, program: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Stage</Label>
                  <Select onValueChange={(val) => setProjectData({...projectData, stage: val})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Idea">Idea</SelectItem>
                      <SelectItem value="Proposal">Proposal</SelectItem>
                      <SelectItem value="Early Build">Early Build</SelectItem>
                      <SelectItem value="Testing">Testing</SelectItem>
                      <SelectItem value="Nearly Done">Nearly Done</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Due Date</Label>
                  <Input 
                    type="date"
                    value={projectData.dueDate}
                    onChange={(e) => setProjectData({...projectData, dueDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => setStep(2)}>Next: Define Needs</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              {!showWizard ? (
                <>
                  <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-blue-900">Not sure what to ask for?</h3>
                      <p className="text-sm text-blue-700">Let us help you identify the right roles.</p>
                    </div>
                    <Button variant="secondary" size="sm" onClick={() => setShowWizard(true)}>Help Me Decide</Button>
                  </div>

                  <div className="space-y-4 border p-4 rounded-lg">
                    <h3 className="font-medium">Add a Role</h3>
                    <div className="grid gap-4">
                      <div>
                        <Label>Role Label</Label>
                        <Input 
                          placeholder="e.g. React Developer" 
                          value={newRole.role}
                          onChange={(e) => setNewRole({...newRole, role: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label>Skills (comma separated)</Label>
                        <Input 
                          placeholder="e.g. React, Firebase, Tailwind" 
                          value={newRole.skills}
                          onChange={(e) => setNewRole({...newRole, skills: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Time Commitment</Label>
                          <Select value={newRole.time} onValueChange={(val) => setNewRole({...newRole, time: val})}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="One-time feedback (1-2 hr)">One-time feedback (1-2 hr)</SelectItem>
                              <SelectItem value="Short sprint (1-2 weeks)">Short sprint (1-2 weeks)</SelectItem>
                              <SelectItem value="Ongoing (4+ weeks)">Ongoing (4+ weeks)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Compensation</Label>
                          <Select value={newRole.compensation} onValueChange={(val) => setNewRole({...newRole, compensation: val})}>
                            <SelectTrigger><SelectValue /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Skill swap">Skill swap</SelectItem>
                              <SelectItem value="Paid">Paid</SelectItem>
                              <SelectItem value="Unpaid / credit only">Unpaid / credit only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button onClick={handleAddRole} variant="outline"><Plus size={16} className="mr-2"/> Add Role</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Needed Roles</h3>
                    {projectData.roles.length === 0 && <p className="text-muted-foreground italic">No roles added yet.</p>}
                    {projectData.roles.map((role, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded border">
                        <div>
                          <div className="font-medium">{role.role}</div>
                          <div className="text-sm text-muted-foreground">
                            {role.skills.join(", ")} • {role.time}
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => handleRemoveRole(idx)}><X size={16} /></Button>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                    <Button onClick={() => setLocation("/project-matches")}>Find Matches</Button>
                  </div>
                </>
              ) : (
                <div className="space-y-4 animate-in fade-in">
                  <h3 className="font-medium text-lg">Let's figure this out</h3>
                  <div>
                    <Label>What are you working on?</Label>
                    <Textarea 
                      placeholder="Brief description..."
                      value={wizardAnswers.workingOn}
                      onChange={(e) => setWizardAnswers({...wizardAnswers, workingOn: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>Where are you stuck?</Label>
                    <Select onValueChange={(val) => setWizardAnswers({...wizardAnswers, stuckOn: val})}>
                      <SelectTrigger><SelectValue placeholder="Select area" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="idea">Idea / Brainstorming</SelectItem>
                        <SelectItem value="research">Research</SelectItem>
                        <SelectItem value="coding">Coding / Technical</SelectItem>
                        <SelectItem value="design">Design / UX</SelectItem>
                        <SelectItem value="writing">Writing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2 justify-end mt-4">
                    <Button variant="ghost" onClick={() => setShowWizard(false)}>Cancel</Button>
                    <Button onClick={handleWizardSuggest}>Get Suggestions</Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
