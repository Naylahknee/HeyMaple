import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { UNIVERSITIES, DEGREE_OPTIONS, PROJECT_TYPES, GRADUATION_YEARS, getMajorsForSchool, getUniversityFromEmail } from "@/lib/uscData";
import { SchoolCombobox } from "@/components/SchoolCombobox";
import { ModeBadge } from "@/components/ModeBadge";
import { CheckCircle2, Mail, Briefcase, GraduationCap, Target } from "lucide-react";

export default function Register() {
  const [_, setLocation] = useLocation();
  const { login, loginWithProvider } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    school: "",
    major: "",
    degree: "",
    graduationYear: new Date().getFullYear().toString(),
    projectType: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (stepNum: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (stepNum === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
      if (!formData.email.trim()) newErrors.email = "Email required";
      
      // Strict .edu check
      if (formData.email && !formData.email.endsWith(".edu")) {
        newErrors.email = "Please use a valid .edu university email address";
      } else {
        const uni = getUniversityFromEmail(formData.email);
        // We still try to auto-detect university, but if not found we don't block unless it's not .edu
        // If we want to ONLY accept USC/UCLA as per previous logic, we keep that.
        // But user said "only accept emails from .edu", implying potentially others?
        // For now, keeping the USC/UCLA auto-select but enforcing .edu generally.
        if (uni) handleInputChange("university", uni.id);
      }
    } else if (stepNum === 2) {
      if (!formData.school) newErrors.school = "School required";
      if (!formData.major) newErrors.major = "Major required";
      if (!formData.degree) newErrors.degree = "Degree level required";
      if (!formData.graduationYear) newErrors.graduationYear = "Graduation year required";
    } else if (stepNum === 3) {
      if (!formData.projectType) newErrors.projectType = "Project type required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(step)) {
      // In a real app we'd register here. For prototype we'll just log them in or move to assessment.
      // Let's log them in so the state persists
      login(formData.email, formData.firstName);
      // Navigate to assessment
      setLocation("/assessment");
    }
  };

  const selectedUniversity = UNIVERSITIES.find(u => u.id === formData.university);
  const selectedSchoolData = selectedUniversity?.schools.find(s => s.id === formData.school);
  const selectedProject = PROJECT_TYPES.find(p => p.id === formData.projectType);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-2">Join Hey Maple</h1>
          <p className="text-muted-foreground text-lg">Find your perfect teammates {selectedUniversity ? `at ${selectedUniversity.name}` : "at USC or UCLA"}</p>
          <p className="text-sm text-muted-foreground mt-2">Step {step} of 4</p>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full transition-colors ${
                i <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <Card className="p-8 shadow-xl">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-8">
                <Mail className="text-primary" size={24} />
                <h2 className="text-2xl font-heading font-bold">Let's start with the basics</h2>
              </div>

              {/* Social Sign Up */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button variant="outline" className="gap-2" onClick={() => loginWithProvider("Google")}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
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
                  <Label htmlFor="email">USC Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jsmith@usc.edu"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <Button onClick={handleNext} className="w-full mt-8">
                Continue
              </Button>
            </div>
          )}

          {/* Step 2: School & Degree */}
          {step === 2 && (
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
                  <Label htmlFor="graduationYear">Expected GraduationCap</Label>
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

              <div className="flex gap-3 mt-8">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleNext} className="flex-1">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Project Type */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-8">
                <Target className="text-primary" size={24} />
                <h2 className="text-2xl font-heading font-bold">What's your project?</h2>
              </div>

              <div>
                <Label htmlFor="projectType">Project Type</Label>
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

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm">
                <p className="font-medium text-blue-900 dark:text-blue-200 mb-2">✨ Next: Find Your Collaboration Mode</p>
                <p className="text-blue-800 dark:text-blue-300 text-xs">
                  We'll ask you 10 quick questions to discover how you naturally work in teams. This helps us match you with complementary teammates.
                </p>
              </div>

              <div className="flex gap-3 mt-8">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleNext} className="flex-1">
                  Continue
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="text-green-500" size={24} />
                <h2 className="text-2xl font-heading font-bold">Almost there!</h2>
              </div>

              <div className="space-y-4 bg-muted/30 rounded-lg p-6">
                <div>
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
                  <p className="text-xs text-muted-foreground mb-1">Degree & GraduationCap</p>
                  <p className="font-semibold">{formData.degree} • Class of {formData.graduationYear}</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-xs text-muted-foreground mb-1">Project</p>
                  <p className="font-semibold">{selectedProject?.name}</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-sm">
                <p className="font-medium text-green-900 dark:text-green-200">✓ Your profile looks great!</p>
                <p className="text-green-800 dark:text-green-300 text-xs mt-1">
                  Let's find your collaboration mode and start matching you with teammates.
                </p>
              </div>

              <div className="flex gap-3 mt-8">
                <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleSubmit} className="flex-1 gap-2">
                  <Briefcase size={16} /> Take the Assessment
                </Button>
              </div>
            </div>
          )}
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Already registered? <a href="/assessment" className="text-primary hover:underline">Take the assessment</a></p>
        </div>
      </div>
    </div>
  );
}
