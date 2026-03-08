import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { UNIVERSITIES, DEGREE_OPTIONS, PROJECT_TYPES, GRADUATION_YEARS, getMajorsForSchool, getUniversityFromEmail } from "@/lib/uscData";
import { SchoolCombobox } from "@/components/SchoolCombobox";
import { ModeBadge } from "@/components/ModeBadge";
import { CheckCircle2, Mail, Briefcase, GraduationCap, Target, Compass, User, School, Building2, BookOpen, Upload, Linkedin, X, Plus, FlaskConical } from "lucide-react";

const SKILLS_LIST = [
  "React", "Node.js", "Python", "Java", "C++", "Swift",
  "Figma", "UI/UX Design", "Adobe Creative Suite",
  "Project Management", "Agile", "Scrum", "Marketing",
  "Social Media", "Public Speaking", "Data Analysis",
  "Machine Learning", "AWS", "SQL", "Communication",
  "Research", "Writing", "Leadership", "Sales"
];

export default function Register() {
  const [_, setLocation] = useLocation();
  const { login, loginWithProvider } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accountType: "Student" as "Student" | "Faculty" | "Alumni" | "BetaTester",
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    school: "",
    major: "",
    degree: "",
    graduationYear: new Date().getFullYear().toString(),
    skills: [] as string[],
    projectType: "",
    goals: [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [customSkill, setCustomSkill] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };
  
  const handleGoalToggle = (goal: string) => {
    setFormData(prev => {
      const currentGoals = prev.goals;
      if (currentGoals.includes(goal)) {
        return { ...prev, goals: currentGoals.filter(g => g !== goal) };
      } else {
        return { ...prev, goals: [...currentGoals, goal] };
      }
    });
    if (errors.goals) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.goals;
        return newErrors;
      });
    }
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => {
      const currentSkills = prev.skills;
      if (currentSkills.includes(skill)) {
        return { ...prev, skills: currentSkills.filter(s => s !== skill) };
      } else {
        return { ...prev, skills: [...currentSkills, skill] };
      }
    });
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !formData.skills.includes(customSkill.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, customSkill.trim()]
      }));
      setCustomSkill("");
    }
  };

  const simulateResumeUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      // Simulate AI extraction
      setFormData(prev => ({
        ...prev,
        skills: Array.from(new Set([...prev.skills, "Project Management", "Communication", "Leadership", "Python"]))
      }));
    }, 2000);
  };

  const validateStep = (stepNum: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (stepNum === 1) {
        // Account type is always selected via buttons, but check just in case
        if (!formData.accountType) newErrors.accountType = "Please select an account type";
    } else if (stepNum === 2) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
      if (!formData.email.trim()) newErrors.email = "Email required";
      
      if (formData.email) {
        const lowerEmail = formData.email.toLowerCase();
        if (formData.accountType === "BetaTester") {
          if (!lowerEmail.endsWith(".edu")) {
            newErrors.email = "Beta testers need a valid .edu email address";
          }
        } else if (!lowerEmail.endsWith("@usc.edu") && !lowerEmail.endsWith("@ucla.edu")) {
          newErrors.email = "Only USC (@usc.edu) and UCLA (@ucla.edu) email addresses are allowed";
        } else {
          const uni = getUniversityFromEmail(formData.email);
          if (uni) handleInputChange("university", uni.id === "USC" ? "usc" : "ucla");
        }
      }
    } else if (stepNum === 3) {
      if (!formData.school) newErrors.school = "School required";
      if (!formData.major) newErrors.major = "Major required";
      if (!formData.degree) newErrors.degree = "Degree level required";
      if (!formData.graduationYear) newErrors.graduationYear = "Graduation year required";
    } else if (stepNum === 4) {
      // Skills are optional but encouraged
    } else if (stepNum === 5) {
      if (formData.goals.length === 0) newErrors.goals = "Please select at least one goal";
    } else if (stepNum === 6) {
      // Only require project type if "Find teammates" is a goal
      if (formData.goals.includes("Find teammates") && !formData.projectType) {
        newErrors.projectType = "Project type required since you're looking for teammates";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      // Logic to skip steps could go here
      // Example: if Step 5 (Goals) doesn't include "Find teammates", skip Step 6 (Project Type)
      if (step === 5 && !formData.goals.includes("Find teammates")) {
        setStep(7); // Jump to Review
      } else {
        setStep(step + 1);
      }
    }
  };

  const handleBack = () => {
      if (step === 7 && !formData.goals.includes("Find teammates")) {
          setStep(5);
      } else {
          setStep(step - 1);
      }
  }

  const handleSubmit = () => {
    if (validateStep(step)) {
      // In a real app we'd register here. For prototype we'll just log them in or move to assessment.
      // Let's log them in so the state persists
      login(formData.email, formData.firstName, formData);
      // Navigate to assessment
      setLocation("/assessment");
    }
  };

  const selectedUniversity = UNIVERSITIES.find(u => u.id === formData.university);
  const selectedSchoolData = selectedUniversity?.schools.find(s => s.id === formData.school);
  const selectedProject = PROJECT_TYPES.find(p => p.id === formData.projectType);

  const GOAL_OPTIONS = [
    { id: "Find teammates", label: "Find teammates for my project", icon: "👥" },
    { id: "Join a project", label: "Join an existing project", icon: "🚀" },
    { id: "Job referrals", label: "Get job referrals from alumni", icon: "💼" },
    { id: "Refer others", label: "Refer students/alumni (Earn Rewards)", icon: "🏆" },
    { id: "Mentorship", label: "Find or become a mentor", icon: "🎓" },
  ];

  const ACCOUNT_TYPES = [
    { id: "Student", label: "Student", description: "Undergrad or grad student looking to collaborate", icon: User },
    { id: "Faculty", label: "Faculty", description: "Offering mentorship or advice", icon: School },
    { id: "Alumni", label: "Alumni / Mentor", description: "Industry mentor or USC alum", icon: Briefcase },
    { id: "BetaTester", label: "Beta Tester", description: "Help test Hey Maple — any .edu email welcome", icon: FlaskConical },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Join <span className="text-leaf">Hey Maple</span></h1>
          <p className="text-muted-foreground text-lg">
            {step === 1 ? "Find Your Perfect Project Partner at USC" : `Find your perfect teammates ${selectedUniversity ? `at ${selectedUniversity.name}` : "at USC or UCLA"}`}
          </p>
          <p className="text-sm text-muted-foreground mt-2">Step {step} of 7</p>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-1 mb-8 px-2">
          {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-colors ${
                (step >= i) ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="card-maple">
          {/* Step 1: Account Type */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <User className="text-primary" size={24} />
                <h2 className="text-2xl font-heading font-bold">I am a...</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ACCOUNT_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = formData.accountType === type.id;
                  return (
                    <div
                      key={type.id}
                      className={`relative flex flex-col p-6 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50 hover:bg-accent/50 ${
                        isSelected ? "border-primary bg-primary/5" : "border-muted"
                      }`}
                      onClick={() => {
                        handleInputChange("accountType", type.id);
                        // Auto advance after brief delay for better UX
                        setTimeout(() => setStep(2), 200);
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                         <div className={`p-2 rounded-full ${isSelected ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                           <Icon size={20} />
                         </div>
                         {isSelected && <CheckCircle2 className="text-primary h-5 w-5" />}
                      </div>
                      <h3 className="font-bold text-lg">{type.label}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-end mt-8">
                 <Button onClick={handleNext}>
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Basic Info (Formerly Step 1) */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-8">
                <Mail className="text-primary" size={24} />
                <h2 className="text-2xl font-heading font-bold">Let's start with the basics</h2>
              </div>

              {/* Social Sign Up */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button variant="outline" className="gap-2" onClick={() => loginWithProvider("Google")}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => loginWithProvider("Facebook")}>
                  <svg className="w-4 h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.048 0-2.733 1.096-2.733 2.807v1.165h3.631l-.566 3.667h-3.065v7.98H9.101z" />
                  </svg>
                  Facebook
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => loginWithProvider("LinkedIn")}>
                  <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Jordan"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <Label htmlFor="email">{formData.accountType === "BetaTester" ? "University Email" : "USC/UCLA Email"}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={formData.accountType === "BetaTester" ? "you@university.edu" : "jsmith@usc.edu"}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="outline" onClick={handleBack} className="flex-1 order-2 sm:order-1">
                  Back
                </Button>
                <Button onClick={handleNext} className="flex-1 order-1 sm:order-2">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: School & Degree (Formerly Step 2) */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-primary" size={24} />
                <h2 className="text-2xl font-heading font-bold">Your Academic Info</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="school">School</Label>
                  <SchoolCombobox
                    value={formData.school}
                    universityId={formData.university}
                    onChange={(val) => {
                      handleInputChange("school", val);
                      handleInputChange("major", "");
                    }}
                    error={errors.school}
                  />
                  {errors.school && <p className="text-red-500 text-sm mt-1">{errors.school}</p>}
                </div>

                {formData.school && (
                  <div>
                    <Label htmlFor="major">Major</Label>
                    <Select value={formData.major} onValueChange={(val) => handleInputChange("major", val)}>
                      <SelectTrigger className={errors.major ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your major" />
                      </SelectTrigger>
                      <SelectContent>
                        {getMajorsForSchool(formData.school, formData.university).map(major => (
                          <SelectItem key={major} value={major}>
                            {major}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.major && <p className="text-red-500 text-sm mt-1">{errors.major}</p>}
                  </div>
                )}

                <div>
                  <Label htmlFor="degree">Degree Level</Label>
                  <Select value={formData.degree} onValueChange={(val) => handleInputChange("degree", val)}>
                    <SelectTrigger className={errors.degree ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your degree" />
                    </SelectTrigger>
                    <SelectContent>
                      {DEGREE_OPTIONS.map(degree => (
                        <SelectItem key={degree} value={degree}>
                          {degree}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.degree && <p className="text-red-500 text-sm mt-1">{errors.degree}</p>}
                </div>

                <div>
                  <Label htmlFor="graduationYear">Expected Graduation</Label>
                  <Select value={formData.graduationYear} onValueChange={(val) => handleInputChange("graduationYear", val)}>
                    <SelectTrigger className={errors.graduationYear ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {GRADUATION_YEARS.map(year => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.graduationYear && <p className="text-red-500 text-sm mt-1">{errors.graduationYear}</p>}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="outline" onClick={handleBack} className="flex-1 order-2 sm:order-1">
                  Back
                </Button>
                <Button onClick={handleNext} className="flex-1 order-1 sm:order-2">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Skills & Experience (NEW) */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-primary" size={24} />
                <h2 className="text-2xl font-heading font-bold">What skills do you bring?</h2>
              </div>

              <p className="text-muted-foreground">
                Select your top skills or let us extract them for you.
              </p>

              {/* Import Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Button 
                  variant="outline" 
                  className="h-auto py-4 flex flex-col gap-2 items-center border-dashed border-2"
                  onClick={simulateResumeUpload}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full"/>
                  ) : (
                    <Upload size={24} className="text-muted-foreground" />
                  )}
                  <span className="font-semibold">Upload Resume</span>
                  <span className="text-xs text-muted-foreground font-normal">AI extracts your skills automatically</span>
                </Button>

                <Button 
                  variant="outline" 
                  className="h-auto py-4 flex flex-col gap-2 items-center border-dashed border-2"
                  onClick={() => {
                    // Mock LinkedIn import
                    simulateResumeUpload();
                  }}
                  disabled={isUploading}
                >
                   <Linkedin size={24} className="text-[#0A66C2]" />
                   <span className="font-semibold">Import LinkedIn</span>
                   <span className="text-xs text-muted-foreground font-normal">Auto-fill from your profile</span>
                </Button>
              </div>
              
              <Separator className="my-4" />

              {/* Selected Skills */}
              <div>
                <Label className="mb-2 block">Selected Skills</Label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {formData.skills.length === 0 && (
                    <span className="text-sm text-muted-foreground italic">No skills selected yet</span>
                  )}
                  {formData.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="pl-3 pr-1 py-1 flex gap-1 items-center text-sm">
                      {skill}
                      <button 
                        onClick={() => handleSkillToggle(skill)}
                        className="hover:bg-muted-foreground/20 rounded-full p-0.5"
                      >
                        <X size={14} />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Add Skills */}
              <div className="space-y-4">
                 <div className="flex gap-2">
                   <Input 
                     placeholder="Add a custom skill..." 
                     value={customSkill}
                     onChange={(e) => setCustomSkill(e.target.value)}
                     onKeyDown={(e) => e.key === 'Enter' && addCustomSkill()}
                   />
                   <Button size="icon" onClick={addCustomSkill} disabled={!customSkill.trim()}>
                     <Plus size={18} />
                   </Button>
                 </div>

                 <div className="border rounded-lg p-4 max-h-60 overflow-y-auto">
                    <div className="flex flex-wrap gap-2">
                      {SKILLS_LIST.filter(s => !formData.skills.includes(s)).map(skill => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-primary/10 hover:border-primary transition-colors"
                          onClick={() => handleSkillToggle(skill)}
                        >
                          + {skill}
                        </Badge>
                      ))}
                    </div>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="outline" onClick={handleBack} className="flex-1 order-2 sm:order-1">
                  Back
                </Button>
                <Button onClick={handleNext} className="flex-1 order-1 sm:order-2">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 5: Goals (Formerly Step 3) */}
          {step === 5 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-8">
                <Compass className="text-primary" size={24} />
                <h2 className="text-2xl font-heading font-bold">What brings you here?</h2>
              </div>
              
              <p className="text-muted-foreground mb-4">Select all that apply. This helps us customize your dashboard.</p>

              <div className="grid gap-3">
                {GOAL_OPTIONS.map((goal) => (
                  <div
                    key={goal.id}
                    className={`relative flex items-start space-x-3 border rounded-lg p-4 cursor-pointer transition-all ${
                      formData.goals.includes(goal.id)
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-primary/50 hover:bg-accent/50"
                    }`}
                    onClick={() => handleGoalToggle(goal.id)}
                  >
                    <div className="flex h-5 items-center space-x-2">
                      <Checkbox 
                        id={`goal-${goal.id}`} 
                        checked={formData.goals.includes(goal.id)}
                        onCheckedChange={() => handleGoalToggle(goal.id)}
                      />
                    </div>
                    <div className="flex-1 grid gap-1">
                      <Label htmlFor={`goal-${goal.id}`} className="cursor-pointer font-medium text-base flex items-center gap-2">
                        <span>{goal.icon}</span> {goal.label}
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
              
              {errors.goals && <p className="text-red-500 text-sm mt-1">{errors.goals}</p>}

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="outline" onClick={handleBack} className="flex-1 order-2 sm:order-1">
                  Back
                </Button>
                <Button onClick={handleNext} className="flex-1 order-1 sm:order-2">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 6: Project Type (Formerly Step 4) */}
          {step === 6 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-8">
                <Target className="text-primary" size={24} />
                <h2 className="text-2xl font-heading font-bold">What's your project?</h2>
              </div>

              <div>
                <Label htmlFor="projectType">Project Type</Label>
                <div className="mb-2 text-sm text-muted-foreground">
                  Don't worry, you can add specific project details later.
                </div>
                <Select value={formData.projectType} onValueChange={(val) => handleInputChange("projectType", val)}>
                  <SelectTrigger className={errors.projectType ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[400px]">
                    {Array.from(new Set(PROJECT_TYPES.map(p => p.category))).map(category => (
                      <SelectGroup key={category}>
                        <SelectLabel className="text-muted-foreground pl-2 py-2 font-bold text-xs uppercase tracking-wider bg-muted/20 sticky top-0 z-10 backdrop-blur-sm border-b">
                          {category}
                        </SelectLabel>
                        {PROJECT_TYPES.filter(p => p.category === category).map(project => (
                          <SelectItem key={project.id} value={project.id}>
                            {project.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
                {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
              </div>

              {selectedProject && (
                <div className="bg-muted/30 p-4 rounded-lg border">
                  <p className="text-sm font-medium mb-1">{selectedProject.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedProject.description}</p>
                </div>
              )}

              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-sm">
                <p className="font-medium text-foreground mb-2">Next: Find Your Collaboration Mode</p>
                <p className="text-muted-foreground text-xs">
                  We'll ask you 10 quick questions to discover how you naturally work in teams. This helps us match you with complementary teammates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="outline" onClick={handleBack} className="flex-1 order-2 sm:order-1">
                  Back
                </Button>
                <Button onClick={handleNext} className="flex-1 order-1 sm:order-2">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 7: Review (Formerly Step 5) */}
          {step === 7 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="text-green-500" size={24} />
                <h2 className="text-2xl font-heading font-bold">Almost there!</h2>
              </div>

              <div className="space-y-4 bg-muted/30 rounded-lg p-6">
                 <div className="flex justify-between">
                   <div>
                      <p className="text-xs text-muted-foreground mb-1">Account Type</p>
                      <p className="font-semibold">{formData.accountType}</p>
                   </div>
                   <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="h-auto p-0 text-xs text-primary">Edit</Button>
                 </div>

                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Name</p>
                  <p className="font-semibold">{formData.firstName} {formData.lastName}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="font-semibold">{formData.email}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground mb-1">University</p>
                  <p className="font-semibold">{selectedUniversity?.name}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground mb-1">School & Major</p>
                  <p className="font-semibold">{selectedSchoolData?.abbreviation} • {formData.major}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.length > 0 ? formData.skills.map(s => (
                      <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                    )) : <span className="text-sm italic text-muted-foreground">None selected</span>}
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Goals</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.goals.map(g => (
                      <span key={g} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedProject && (
                  <div className="border-t pt-4">
                    <p className="text-xs text-muted-foreground mb-1">Project</p>
                    <p className="font-semibold">{selectedProject.name}</p>
                  </div>
                )}
              </div>

              <div className="bg-leaf/5 border border-leaf/10 rounded-2xl p-4 text-sm">
                <p className="font-medium text-foreground">Your profile looks great!</p>
                <p className="text-muted-foreground text-xs mt-1">
                  Let's find your collaboration mode and start matching you with teammates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="outline" onClick={handleBack} className="flex-1 order-2 sm:order-1">
                  Back
                </Button>
                <Button onClick={handleSubmit} className="flex-1 gap-2 order-1 sm:order-2">
                  <Briefcase size={16} /> Take the Assessment
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Already have an account? <a href="/login" className="text-primary hover:underline">Log in</a></p>
        </div>
      </div>
    </div>
  );
}
