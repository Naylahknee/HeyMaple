import { User } from "@/lib/types";
import { ModeBadge } from "./ModeBadge";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProfileCardProps {
  user: User;
  compact?: boolean;
  onClick?: () => void;
}

const universityLabels: Record<string, string> = {
  usc: "USC",
  ucla: "UCLA"
};

export function ProfileCard({ user, compact = false, onClick }: ProfileCardProps) {
  const universityDisplay = user.university ? universityLabels[user.university] || user.university.toUpperCase() : null;

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-md border-border/60 bg-card/50 backdrop-blur-sm hover:bg-card cursor-pointer",
        compact ? "p-4" : "p-6"
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar className={cn("border-2 border-background shadow-sm", compact ? "w-10 h-10" : "w-16 h-16")}>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={cn("font-heading font-semibold leading-tight group-hover:text-primary transition-colors", compact ? "text-base" : "text-lg")}>
                {user.name}
              </h3>
              {universityDisplay && (
                <span className={cn(
                  "text-xs font-bold px-2 py-0.5 rounded-full",
                  user.university === "usc" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                )}>
                  {universityDisplay}
                </span>
              )}
            </div>
            <p className="text-muted-foreground text-sm">
              {user.major} • '{user.year?.toString().slice(2) || '??'}
            </p>
          </div>
        </div>
        {!compact && (
           <div className="text-right hidden sm:block">
             <div className="text-xs text-muted-foreground mb-1">Primary Mode</div>
             <ModeBadge mode={user.mode || "Architect"} />
           </div>
        )}
      </div>

      {compact && user.mode && (
        <div className="mt-3">
          <ModeBadge mode={user.mode} size="sm" />
        </div>
      )}

      {!compact && (
        <>
          <p className="mt-4 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {user.bio}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-1.5">
            {(user.skills || []).slice(0, 4).map(skill => (
              <Badge key={skill} variant="secondary" className="text-xs font-normal bg-muted/50 hover:bg-muted">
                {skill}
              </Badge>
            ))}
            {(user.skills || []).length > 4 && (
              <span className="text-xs text-muted-foreground flex items-center px-1">+{(user.skills || []).length - 4}</span>
            )}
          </div>

          <div className="mt-6 pt-4 border-t flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Secondary:</span>
              <span className="font-medium text-foreground">{user.secondaryMode}</span>
            </div>
            <button className="text-primary font-medium flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              View Profile <ArrowRight size={14} />
            </button>
          </div>
        </>
      )}
    </Card>
  );
}
