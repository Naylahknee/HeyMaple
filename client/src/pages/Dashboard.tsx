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
import { Search, SlidersHorizontal, MessageSquare, Heart, Award, Gift, Briefcase } from "lucide-react";
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
  const [referralModalOpen, setReferralModalOpen] = useState(false);
  
  // Simulate "My" profile as Architect for demo purposes (or use real user mode if we had it in auth)
  const myMode: CollaborationMode = "Architect";

  const filteredUsers = MOCK_USERS.filter(user => {
    const matchesMode = filterMode === "All" || user.mode === filterMode;
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          user.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
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

  // Check if user has "Job referrals" or "Refer others" goals
  const showReferralWidget = user?.goals?.includes("Job referrals") || user?.goals?.includes("Refer others");
  const isReferrer = user?.goals?.includes("Refer others");

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 p-4 md:p-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* Entry Point Section */}
        <div className="grid gap-6 mb-12">
          <div className="p-8 bg-gradient-to-r from-primary/5 to-purple-500/5 border rounded-2xl text-center md:text-left md:flex items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">What do you want to do today?</h2>
              <p className="text-muted-foreground text-lg">Start building your team or offer your skills to others.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
              <Button size="lg" className="h-14 px-8 text-lg shadow-lg" onClick={() => setLocation("/create-project")}>
                Get Help on a Project
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2" onClick={() => setLocation("/helper-setup")}>
                Offer Help to Others
              </Button>
            </div>
          </div>

          {/* Referral Widget (Conditionally Rendered) */}
          {showReferralWidget && (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl flex items-center gap-2 text-amber-900 dark:text-amber-100">
                      <Briefcase className="h-5 w-5" />
                      Job & Internship Referrals
                    </CardTitle>
                    {isReferrer && (
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <Award className="h-3 w-3" /> {user?.referralPoints || 0} pts
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-amber-800/80 dark:text-amber-200/70">
                    {isReferrer 
                      ? "Refer talented students to your company and earn rewards."
                      : "Connect with alumni for career advice and referrals."}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {isReferrer ? (
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white border-0" onClick={() => setReferralModalOpen(true)}>
                        <Gift className="mr-2 h-4 w-4" /> Post Referral Opportunity
                      </Button>
                    ) : (
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white border-0">
                        Find Alumni Referrals
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold">Browse Community</h1>
            <p className="text-muted-foreground">
              Connect directly with students and alumni.
            </p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" onClick={() => setLocation("/matches")}>
               My Matches & Collabs
             </Button>
             <div className="flex items-center gap-2 bg-white p-1 rounded-lg border shadow-sm">
               <span className="text-xs font-medium px-2 text-muted-foreground">You are an:</span>
               <ModeBadge mode={myMode} size="sm" />
             </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm py-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search by name or skill..." 
              className="pl-10 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Button 
              variant={filterMode === "All" ? "default" : "outline"}
              onClick={() => setFilterMode("All")}
              className="rounded-full"
            >
              All
            </Button>
            {Object.keys(MODES).map((mode) => (
              <Button
                key={mode}
                variant={filterMode === mode ? "default" : "outline"}
                onClick={() => setFilterMode(mode as CollaborationMode)}
                className="rounded-full"
              >
                {mode}
              </Button>
            ))}
            <Button variant="ghost" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Referral Modal */}
        <Dialog open={referralModalOpen} onOpenChange={setReferralModalOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Post a Referral Opportunity</DialogTitle>
              <DialogDescription>
                Share details about the role and how you can help refer a fellow alum.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Company</label>
                <Input placeholder="e.g. Google, NASA, Startup Inc." />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Role / Position</label>
                <Input placeholder="e.g. Software Engineer, Product Manager" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Referral Note</label>
                <Input placeholder="Briefly describe what you're looking for in a candidate..." />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setReferralModalOpen(false)}>Cancel</Button>
              <Button className="bg-amber-600 hover:bg-amber-700" onClick={() => {
                setReferralModalOpen(false);
                setShowToast(true); // Reuse existing toast for simplicity or create new one
              }}>
                Post Opportunity
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
              <MatchResult user1Mode={myMode} user2Mode={user.mode} compact />
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No users found matching your criteria.</p>
          </div>
        )}

        {showToast && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-bottom-5">
            ✓ Connection request sent! They'll see it in their notifications.
          </div>
        )}

        {/* Connection Request Dialog */}
        {selectedUser && (
          <ConnectionRequest
            user={selectedUser}
            isOpen={connectionRequestOpen}
            onOpenChange={setConnectionRequestOpen}
            onConnect={handleConnectionRequest}
          />
        )}

        {/* User Detail Dialog */}
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
                       <ModeBadge mode={selectedUser.mode} />
                     </DialogTitle>
                   </DialogHeader>
                 </div>
                 
                 <div className="px-6 mb-6">
                   <p className="text-muted-foreground leading-relaxed mb-6">{selectedUser.bio}</p>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedUser.skills.map(s => (
                            <span key={s} className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Compatibility Analysis</h4>
                        <MatchResult user1Mode={myMode} user2Mode={selectedUser.mode} />
                      </div>
                   </div>
                 </div>

                 <div className="space-y-6 border-t pt-6">
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
