import { useState } from "react";
import { QUESTIONS } from "@/lib/mockData";
import { CollaborationMode } from "@/lib/types";
import { calculateAssessmentResult } from "@/lib/algorithm";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AssessmentFlowProps {
  onComplete: (result: { primary: CollaborationMode; secondary: CollaborationMode; confidence: number }) => void;
}

export function AssessmentFlow({ onComplete }: AssessmentFlowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<CollaborationMode[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex) / QUESTIONS.length) * 100;

  const handleAnswer = (mode: CollaborationMode) => {
    const newAnswers = [...answers, mode];
    setAnswers(newAnswers);

    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsAnalyzing(true);
      // Simulate analysis delay for effect
      setTimeout(() => {
        const result = calculateAssessmentResult(newAnswers);
        onComplete(result);
      }, 2000);
    }
  };

  if (isAnalyzing) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-muted rounded-full" />
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-2xl">🍁</span>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold mb-2">Analyzing Your Style</h3>
          <p className="text-muted-foreground">Comparing your responses with 5 collaboration archetypes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
          <span>Question {currentIndex + 1} of {QUESTIONS.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 leading-tight">
            {currentQuestion.text}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.mode)}
                className="w-full text-left p-4 md:p-6 rounded-xl border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all group flex items-start gap-4 bg-card shadow-sm hover:shadow-md"
              >
                <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary flex items-center justify-center mt-0.5 shrink-0 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-lg font-medium text-foreground/90 group-hover:text-primary transition-colors">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
