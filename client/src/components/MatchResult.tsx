import { CollaborationMode } from "@/lib/types";
import { calculateChemistryScore, getCompatibilityInsight } from "@/lib/algorithm";
import { cn } from "@/lib/utils";
import { ModeBadge } from "./ModeBadge";
import { Progress } from "./ui/progress";

interface MatchResultProps {
  user1Mode: CollaborationMode;
  user2Mode: CollaborationMode;
  compact?: boolean;
}

export function MatchResult({ user1Mode, user2Mode, compact = false }: MatchResultProps) {
  const score = calculateChemistryScore(user1Mode, user2Mode);
  const percent = (score / 5) * 100;
  const insight = getCompatibilityInsight(user1Mode, user2Mode);

  // Color based on score
  let colorClass = "bg-red-500";
  if (score >= 4) colorClass = "bg-green-500";
  else if (score === 3) colorClass = "bg-yellow-500";
  
  return (
    <div className={cn("bg-muted/30 rounded-xl", compact ? "p-3" : "p-6")}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">Compatibility</span>
        <span className={cn("font-bold", 
          score >= 4 ? "text-green-600" : score === 3 ? "text-yellow-600" : "text-red-600"
        )}>
          {score}/5
        </span>
      </div>
      
      <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
        <div 
          className={cn("h-full transition-all duration-500", colorClass)} 
          style={{ width: `${percent}%` }} 
        />
      </div>

      {!compact && (
        <div className="text-sm text-foreground/80 leading-relaxed">
          {insight}
        </div>
      )}
    </div>
  );
}
