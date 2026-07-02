import { useState } from "react";
import { MOCK_USERS, MODES } from "@/lib/mockData";
import { CollaborationMode, User } from "@/lib/types";
import { useAuth } from "@/hooks/use-auth";
import { ProfileCard } from "@/components/ProfileCard";
import { ModeBadge } from "@/components/ModeBadge";
import { MatchResult } from "@/components/MatchResult";
import { ConnectionRequest } from "@/components/ConnectionRequest";
import { UserReview } from "@/components/UserReview";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Search, SlidersHorizontal, MessageSquare, Heart, Award, Gift, Briefcase, Lightbulb, Users, Building2, Plus, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Toast } from "@/components/ui/toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import { useLocation } from "wouter";

export default function Dashboard() {
  const [_, setLocation] = useLocation();
  const { user } = useAuth();
  const [filterMode, setFilterMode] = useState<CollaborationMode | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [connectionRequestOpen, setConnectionRequestOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [postJobModalOpen, setPostJobModalOpen] = useState(false);
  const [jobForm, setJobForm] = useState({ company: "", role: "", description: "", location: "", jobType: "full-time" });
  const [isSubmittingJob, setIsSubmittingJob] = useState(false);
  
  const myMode: CollaborationMode = "Architect";

  const filteredUsers = MOCK_USERS.filter(user => {
    const matchesMode = filterMode === "All" || user.mode === filterMode;
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (user.skills || []).some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesMode && matchesSearch;
  });

  const handleConnectClick = (user: User) => {
    setConnectionRequestOpen(true);
  };

  const handleConnectionRequest = (message: string) => {
    setConnectionRequestOpen(false);
    setSelectedUser(null);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const canPostJobs = user?.accountType === "Faculty" || user?.accountType === "Alumni";

  const handlePostJob = async () => {
    if (!jobForm.company || !jobForm.role) return;
    setIsSubmittingJob(true);
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...jobForm,
          postedById: user?.id,
        }),
      });
      if (response.ok) {
        setPostJobModalOpen(false);
        setJobForm({ company: "", role: "", description: "", location: "", jobType: "full-time" });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error("Failed to post job:", error);
    } finally {
      setIsSubmittingJob(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 md:py-12">
      <div className="content-width">
        
        {/* Action Cards */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
              What do you want to<br /><span className="text-leaf">do today?</span>
            </h2>
            <p className="text-muted-foreground">Choose an action to get started</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className="card-maple group cursor-pointer hover:-translate-y-1 transition-all text-center"
              onClick={() => setLocation("/create-project")}
              data-testid="card-get-help"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Get Help on a Project</h3>
              <p className="text-[15px] text-muted-foreground">Find teammates to collaborate on your ideas</p>
            </div>

            <div 
              className="card-maple group cursor-pointer hover:-translate-y-1 transition-all text-center"
              onClick={() => setLocation("/helper-setup")}
              data-testid="card-offer-help"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <HandHeart className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Offer Help to Others</h3>
              <p className="text-[15px] text-muted-foreground">Share your skills and support fellow students</p>
            </div>

            <div 
              className="card-maple group cursor-pointer hover:-translate-y-1 transition-all text-center"
              onClick={() => setLocation("/jobs")}
              data-testid="card-find-jobs"
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">Who's Recruiting?</h3>
              <p className="text-[15px] text-muted-foreground">Browse job & internship opportunities</p>
            </div>

            {canPostJobs ? (
              <div 
                className="card-maple group cursor-pointer hover:-translate-y-1 transition-all text-center"
                onClick={() => setPostJobModalOpen(true)}
                data-testid="card-post-job"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Post Opportunity</h3>
                <p className="text-[15px] text-muted-foreground">Share jobs from your company</p>
              </div>
            ) : (
              <div 
                className="card-maple group cursor-pointer hover:-translate-y-1 transition-all text-center"
                onClick={() => setLocation("/project-feed")}
                data-testid="card-browse-projects"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Browse Projects</h3>
                <p className="text-[15px] text-muted-foreground">Find projects that need your skills</p>
              </div>
            )}
          </div>
        </div>

        <div className="divider mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">
              Browse <span className="text-leaf">Community</span>
            </h1>
            <p className="text-muted-foreground">
              Connect directly with students and alumni.
            </p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" size="sm" onClick={() => setLocation("/matches")}>
               My Matches & Collabs
             </Button>
             <div className="flex items-center gap-2 bg-secondary p-1.5 rounded-full border border-border">
               <span className="text-xs font-medium px-2 text-muted-foreground">You are an:</span>
               <ModeBadge mode={myMode} size="sm" />
             </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-20 z-30 bg-white/95 backdrop-blur-sm py-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search by name or skill..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Button 
              variant={filterMode === "All" ? "default" : "outline"}
              onClick={() => setFilterMode("All")}
              size="sm"
            >
              All
            </Button>
            {Object.keys(MODES).map((mode) => (
              <Button
                key={mode}
                variant={filterMode === mode ? "default" : "outline"}
                onClick={() => setFilterMode(mode as CollaborationMode)}
                size="sm"
              >
                {mode}
              </Button>
            ))}
          </div>
        </div>

        {/* Post Job Modal */}
        <Dialog open={postJobModalOpen} onOpenChange={setPostJobModalOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                Post a Job Opportunity
              </DialogTitle>
              <DialogDescription>
                Share an open position at your company with students.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="company">Company *</Label>
                <Input 
                  id="company"
                  placeholder="e.g. Google, SpaceX, Startup Inc." 
                  value={jobForm.company}
                  onChange={(e) => setJobForm({ ...jobForm, company: e.target.value })}
                  data-testid="input-job-company"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role / Position *</Label>
                <Input 
                  id="role"
                  placeholder="e.g. Software Engineer Intern, Product Manager" 
                  value={jobForm.role}
                  onChange={(e) => setJobForm({ ...jobForm, role: e.target.value })}
                  data-testid="input-job-role"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location"
                  placeholder="e.g. Los Angeles, Remote, Hybrid" 
                  value={jobForm.location}
                  onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                  data-testid="input-job-location"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="jobType">Type</Label>
                <select 
                  id="jobType"
                  className="flex h-10 w-full rounded-full border border-input bg-background px-4 py-2 text-sm"
                  value={jobForm.jobType}
                  onChange={(e) => setJobForm({ ...jobForm, jobType: e.target.value })}
                  data-testid="select-job-type"
                >
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="internship">Internship</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Tell students about this opportunity..." 
                  value={jobForm.description}
                  onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                  className="min-h-[100px]"
                  data-testid="input-job-description"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setPostJobModalOpen(false)}>Cancel</Button>
              <Button 
                onClick={handlePostJob}
                disabled={!jobForm.company || !jobForm.role || isSubmittingJob}
                data-testid="button-submit-job"
              >
                {isSubmittingJob ? "Posting..." : "Post Opportunity"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(user => (
            <div key={user.id} className="space-y-4">
              <ProfileCard 
                user={user} 
                onClick={() => setSelectedUser(user)} 
              />
              <MatchResult user1Mode={myMode} user2Mode={user.mode || "Architect"} compact />
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No users found matching your criteria.</p>
          </div>
        )}

        {showToast && (
          <div className="fixed bottom-4 right-4 bg-leaf text-white px-6 py-3 rounded-full shadow-lg animate-in slide-in-from-bottom-5 font-semibold text-sm">
            Connection request sent!
          </div>
        )}

        {selectedUser && (
          <ConnectionRequest
            user={selectedUser}
            isOpen={connectionRequestOpen}
            onOpenChange={setConnectionRequestOpen}
            onConnect={handleConnectionRequest}
          />
        )}

        <Dialog open={!!selectedUser && !connectionRequestOpen} onOpenChange={(open) => !open && setSelectedUser(null)}>
          <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0">
             {selectedUser && (
               <>
                 <div className="p-6 pb-0">
                   <DialogHeader className="mb-4">
                     <DialogTitle className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <img src={selectedUser.avatar} className="w-12 h-12 rounded-full" alt="" />
                         <div>
                           <div className="text-xl font-bold">{selectedUser.name}</div>
                           <div className="text-sm font-normal text-muted-foreground">{selectedUser.major}</div>
                         </div>
                       </div>
                       <ModeBadge mode={selectedUser.mode || "Architect"} />
                     </DialogTitle>
                   </DialogHeader>
                 </div>
                 
                 <div className="px-6 mb-6">
                   <p className="text-muted-foreground leading-relaxed mb-6">{selectedUser.bio}</p>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {(selectedUser.skills || []).map(s => (
                            <span key={s} className="px-3 py-1 bg-secondary text-foreground rounded-full text-xs font-medium">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Compatibility Analysis</h4>
                        <MatchResult user1Mode={myMode} user2Mode={selectedUser.mode || "Architect"} />
                      </div>
                   </div>
                 </div>

                 <div className="space-y-6 border-t border-border pt-6 px-6 pb-6">
                   {selectedUser.reviews && selectedUser.reviews.length > 0 && (
                     <div>
                       <h4 className="text-sm font-semibold mb-3">Collaborator Reviews</h4>
                       <div className="space-y-3">
                         {selectedUser.reviews.map((review, idx) => (
                           <UserReview key={idx} review={review} />
                         ))}
                       </div>
                     </div>
                   )}

                   <div className="flex gap-3">
                     <Button variant="outline" className="flex-1 gap-2" onClick={() => setSelectedUser(null)}>
                       <MessageSquare size={16} /> Message
                     </Button>
                     <Button className="flex-1 gap-2" onClick={() => handleConnectClick(selectedUser)}>
                       <Heart size={16} /> Send Connection Request
                     </Button>
                   </div>
                 </div>
               </>
             )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
