import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { MOCK_USERS } from "@/lib/mockData";
import { CheckCircle2, Clock } from "lucide-react";

export default function ProjectMatches() {
  const [_, setLocation] = useLocation();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [requestOpen, setRequestOpen] = useState(false);
  const [requestMessage, setRequestMessage] = useState("");

  // Filter mock users to simulate matches
  const matches = MOCK_USERS.slice(0, 3).map(u => ({...u, matchScore: Math.floor(Math.random() * 20) + 80}));

  const handleRequestClick = (user: any) => {
    setSelectedUser(user);
    setRequestMessage(
      `Hi ${user.name.split(' ')[0]}, I'm working on a capstone where I'm building a streaming insights app. I saw you list ${user.skills[0]} and that you've helped on capstones before.\n\nI'm looking for: [Coder for 2-week sprint]\nWhat I'd love from you: [Help with auth + basic dashboard]\nTimeline: [Now–April 15].\n\nWould you be open to a 20–30 minute call to see if it’s a fit?`
    );
    setRequestOpen(true);
  };

  const sendRequest = () => {
    setRequestOpen(false);
    // In a real app, send API request
    alert("Request sent!");
    setLocation("/matches");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => setLocation("/create-project")}>← Edit Project</Button>
          <h1 className="text-3xl font-heading font-bold mt-4">Suggested Matches</h1>
          <p className="text-muted-foreground">Based on your need for a React Developer</p>
        </div>

        <div className="grid gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Badge variant="secondary" className="cursor-pointer">Top Matches</Badge>
            <Badge variant="outline" className="cursor-pointer">From your program</Badge>
            <Badge variant="outline" className="cursor-pointer">Alumni</Badge>
          </div>

          {matches.map(user => (
            <Card key={user.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">{user.major} • Class of {user.year}</p>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                      {user.matchScore}% Match
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {user.skills.map((skill: string) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>

                  <div className="mt-4 text-sm">
                    <span className="font-medium">Best at helping with:</span> {user.bio.substring(0, 60)}...
                  </div>

                  <div className="mt-4 flex gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"><CheckCircle2 size={14}/> Helped 3 capstones</div>
                    <div className="flex items-center gap-1"><Clock size={14}/> Evenings & Weekends</div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  <Button onClick={() => handleRequestClick(user)}>Request Help</Button>
                  <Button variant="outline">Save</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={requestOpen} onOpenChange={setRequestOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Request Help from {selectedUser?.name}</DialogTitle>
            <DialogDescription>
              Customize your message to increase response rate.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Textarea 
              value={requestMessage} 
              onChange={(e) => setRequestMessage(e.target.value)}
              className="min-h-[200px]"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRequestOpen(false)}>Cancel</Button>
            <Button onClick={sendRequest}>Send Request</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
