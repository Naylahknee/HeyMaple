import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Calendar, FolderOpen, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Matches() {
  const [_, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white py-8 md:py-12">
      <div className="content-width max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => setLocation("/dashboard")}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Dashboard
          </Button>
          <h1 className="text-2xl md:text-3xl font-extrabold mt-4">
            Collaboration <span className="text-leaf">Hub</span>
          </h1>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="requests">Requests (2)</TabsTrigger>
            <TabsTrigger value="active">Active Collaborations</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="requests">
            <div className="card-maple mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">Sarah Chen</h3>
                  <p className="text-sm text-muted-foreground">Wants to help with your Capstone</p>
                  <p className="text-sm mt-2 italic text-muted-foreground">"Hi, I saw your project and can help with React..."</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Decline</Button>
                  <Button size="sm">Accept</Button>
                </div>
              </div>
            </div>
            <div className="card-maple">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">To: Alex Rivera</h3>
                  <p className="text-sm text-muted-foreground">You offered help on "Thesis Data"</p>
                  <Badge variant="secondary" className="mt-2 rounded-full">Pending</Badge>
                </div>
                <Button variant="ghost" size="sm">Withdraw</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="active">
            <div className="card-maple border-l-4 border-l-primary">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-xl">Capstone - Streaming App</h3>
                    <Badge className="rounded-full">Active</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">Collaborating with <strong>Jordan Lee</strong> (UX Designer)</p>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="gap-2">
                      <MessageSquare size={14} /> Open Chat
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Calendar size={14} /> Schedule Call
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2">
                      <FolderOpen size={14} /> Shared Files
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="past">
            <p className="text-muted-foreground text-center py-8">No past collaborations yet.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
