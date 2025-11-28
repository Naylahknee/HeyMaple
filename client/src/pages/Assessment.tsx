import { AssessmentFlow } from "@/components/AssessmentFlow";
import { useLocation } from "wouter";
import { CollaborationMode } from "@/lib/types";

export default function Assessment() {
  const [_, setLocation] = useLocation();

  const handleComplete = (result: { primary: CollaborationMode; secondary: CollaborationMode; confidence: number }) => {
    // In a real app, save to backend. Here, redirect with params.
    setLocation(`/results?primary=${result.primary}&secondary=${result.secondary}&confidence=${result.confidence}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card border shadow-xl rounded-2xl p-6 md:p-12">
          <AssessmentFlow onComplete={handleComplete} />
        </div>
      </div>
    </div>
  );
}
