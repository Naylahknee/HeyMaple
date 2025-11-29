import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function HelperSetup() {
  const [_, setLocation] = useLocation();
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => setLocation("/dashboard")}>← Back</Button>
          <h1 className="text-3xl font-heading font-bold mt-4">Offer Help</h1>
          <p className="text-muted-foreground">Set up your helper profile to find relevant projects.</p>
        </div>

        <Card className="p-6 space-y-6">
          <div>
            <Label>What can you help with?</Label>
            <Input placeholder="e.g. React, UX Research, Graphic Design" />
            <p className="text-xs text-muted-foreground mt-1">List your top skills</p>
          </div>

          <div>
            <Label>How do you prefer to help?</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Button variant="outline" className="justify-start h-auto py-3 px-4">
                <div className="text-left">
                  <div className="font-medium">One-time Feedback</div>
                  <div className="text-xs text-muted-foreground">1-2 hour commitment</div>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-3 px-4">
                <div className="text-left">
                  <div className="font-medium">Longer Collab</div>
                  <div className="text-xs text-muted-foreground">Weeks or months</div>
                </div>
              </Button>
            </div>
          </div>

          <div>
            <Label>Availability</Label>
            <Input placeholder="e.g. Weekday evenings, Weekends" />
          </div>

          <div>
            <Label>One thing you refuse to do?</Label>
            <Input placeholder="e.g. Write code from scratch, attend 8am meetings" />
          </div>

          <Button className="w-full" onClick={() => setLocation("/project-feed")}>
            Save & See Projects
          </Button>
        </Card>
      </div>
    </div>
  );
}
