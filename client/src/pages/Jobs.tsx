import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Building2, Clock, Search, ArrowLeft, Plus } from "lucide-react";

interface JobOpportunity {
  id: string;
  postedById: string;
  company: string;
  role: string;
  description: string | null;
  location: string | null;
  jobType: string | null;
  isActive: boolean | null;
  createdAt: string;
}

export default function Jobs() {
  const [_, setLocation] = useLocation();
  const { user } = useAuth();
  const [jobs, setJobs] = useState<JobOpportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      }
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (job.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
    const matchesType = filterType === "all" || job.jobType === filterType;
    return matchesSearch && matchesType;
  });

  const canPostJobs = user?.accountType === "Faculty" || user?.accountType === "Alumni";

  const jobTypeLabel = (type: string | null) => {
    switch (type) {
      case "full-time": return "Full-time";
      case "part-time": return "Part-time";
      case "internship": return "Internship";
      case "contract": return "Contract";
      default: return "Full-time";
    }
  };

  const jobTypeColor = (type: string | null) => {
    switch (type) {
      case "internship": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "full-time": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "part-time": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      case "contract": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 p-4 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => setLocation("/dashboard")}
          data-testid="button-back-dashboard"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-amber-600" />
              Who's Recruiting?
            </h1>
            <p className="text-muted-foreground mt-1">
              Browse job and internship opportunities from alumni and partners
            </p>
          </div>
          {canPostJobs && (
            <Button 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => setLocation("/dashboard")}
              data-testid="button-post-job-cta"
            >
              <Plus className="mr-2 h-4 w-4" /> Post Opportunity
            </Button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search by company or role..." 
              className="pl-10 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-jobs"
            />
          </div>
          <div className="flex gap-2">
            {["all", "internship", "full-time", "part-time", "contract"].map((type) => (
              <Button
                key={type}
                variant={filterType === type ? "default" : "outline"}
                onClick={() => setFilterType(type)}
                className="capitalize"
                size="sm"
                data-testid={`filter-${type}`}
              >
                {type === "all" ? "All" : jobTypeLabel(type)}
              </Button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground">Loading opportunities...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent>
              <Briefcase className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No opportunities yet</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery 
                  ? "No jobs match your search. Try different keywords."
                  : "Be the first to know when new opportunities are posted!"}
              </p>
              {canPostJobs && (
                <Button 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => setLocation("/dashboard")}
                >
                  <Plus className="mr-2 h-4 w-4" /> Post the First Opportunity
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card 
                key={job.id} 
                className="hover:shadow-md transition-shadow"
                data-testid={`job-card-${job.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-1">{job.role}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base">
                        <Building2 className="h-4 w-4" />
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge className={jobTypeColor(job.jobType)}>
                      {jobTypeLabel(job.jobType)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {job.description && (
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {job.description}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    {job.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Posted {new Date(job.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
