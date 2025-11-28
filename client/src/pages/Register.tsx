import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { USC_SCHOOLS, DEGREE_OPTIONS, PROJECT_TYPES, GRADUATION_YEARS, getMajorsForSchool } from "@/lib/uscData";
import { SchoolCombobox } from "@/components/SchoolCombobox";
import { ModeBadge } from "@/components/ModeBadge";
import { CheckCircle2, Mail, Briefcase, Graduation, Target } from "lucide-react";

export default function Register() {
  const [_, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
      if (!formData.email.includes("@usc.edu")) newErrors.email = "Please use your USC email (@usc.edu)";
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
      // Navigate to assessment
      setLocation("/assessment");
    }
  };

  const selectedSchool = USC_SCHOOLS.find(s => s.id === formData.school);
  const selectedProject = PROJECT_TYPES.find(p => p.id === formData.projectType);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-2">Join Hey Maple</h1>
          <p className="text-muted-foreground text-lg">Find your perfect teammates at USC</p>
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
                        {getMajorsForSchool(formData.school).map(major => (
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
                  <SelectContent>
                    {PROJECT_TYPES.map(project => (
                      <SelectItem key={project.id} value={project.id}>
                        {project.name}
                      </SelectItem>
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
                  <p className="text-xs text-muted-foreground mb-1">School</p>
                  <p className="font-semibold">{selectedSchool?.abbreviation}</p>
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
