import { AssessmentFlow } from "@/components/AssessmentFlow";
import { useLocation } from "wouter";
import { CollaborationMode } from "@/lib/types";

export default function Assessment() {
  const [_, setLocation] = useLocation();

  const handleComplete = (result: { primary: CollaborationMode; secondary: CollaborationMode; confidence: number }) => {
    setLocation(`/results?primary=${result.primary}&secondary=${result.secondary}&confidence=${result.confidence}`);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="content-width">
        <div className="bg-white border border-border rounded-2xl p-6 md:p-12 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          <AssessmentFlow onComplete={handleComplete} />
        </div>
      </div>
    </div>
  );
}
