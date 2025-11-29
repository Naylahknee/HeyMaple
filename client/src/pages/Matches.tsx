import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Calendar, FolderOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Matches() {
  const [_, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => setLocation("/dashboard")}>← Dashboard</Button>
          <h1 className="text-3xl font-heading font-bold mt-4">Collaboration Hub</h1>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="requests">Requests (2)</TabsTrigger>
            <TabsTrigger value="active">Active Collaborations</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="requests">
            <Card className="p-6 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">Sarah Chen</h3>
                  <p className="text-sm text-muted-foreground">Wants to help with your Capstone</p>
                  <p className="text-sm mt-2 italic">"Hi, I saw your project and can help with React..."</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Decline</Button>
                  <Button>Accept</Button>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">To: Alex Rivera</h3>
                  <p className="text-sm text-muted-foreground">You offered help on "Thesis Data"</p>
                  <Badge variant="secondary" className="mt-2">Pending</Badge>
                </div>
                <Button variant="ghost">Withdraw</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="active">
            <Card className="p-6 mb-4 border-l-4 border-l-primary">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-xl">Capstone - Streaming App</h3>
                    <Badge>Active</Badge>
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
            </Card>
          </TabsContent>

          <TabsContent value="past">
            <p className="text-muted-foreground text-center py-8">No past collaborations yet.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
