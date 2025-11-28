import { useState } from "react";
import { User } from "@/lib/types";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { ModeBadge } from "./ModeBadge";
import { Heart, MessageSquare } from "lucide-react";

interface ConnectionRequestProps {
  user: User;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConnect: (introMessage: string) => void;
}

export function ConnectionRequest({ user, isOpen, onOpenChange, onConnect }: ConnectionRequestProps) {
  const [introMessage, setIntroMessage] = useState(
    `I think we'd collaborate really well together! Your ${user.mode} approach would complement my working style perfectly.`
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConnect = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      onConnect(introMessage);
      onOpenChange(false);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <span className="text-3xl">🤝</span>
            Connect with {user.name}
          </DialogTitle>
          <DialogDescription>
            Send a personalized introduction message to start collaborating
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-muted/30 rounded-xl p-4 flex items-start gap-4">
            <img src={user.avatar} className="w-16 h-16 rounded-full" alt={user.name} />
            <div className="flex-1">
              <h3 className="font-bold text-lg">{user.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{user.major} • Class of '{user.year.toString().slice(2)}</p>
              <div className="flex items-center gap-2">
                <ModeBadge mode={user.mode} size="sm" />
                <span className="text-xs text-muted-foreground">({user.modeConfidence}% confidence)</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block">
              <span className="text-sm font-semibold mb-2 block">Why are you interested in connecting?</span>
              <Textarea
                placeholder="Tell them why you think you'd work well together..."
                value={introMessage}
                onChange={(e) => setIntroMessage(e.target.value)}
                className="min-h-24"
              />
            </label>
            <p className="text-xs text-muted-foreground">Tip: Be specific about how your skills complement theirs.</p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm">
            <p className="font-medium text-blue-900 dark:text-blue-200 mb-2">✨ Why {user.name} might be a great match:</p>
            <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-xs">
              <li>• {user.mode}s and Architects = 5/5 compatibility when paired correctly</li>
              <li>• Skilled in: {user.skills.slice(0, 3).join(", ")}</li>
              <li>• Verified student with positive collaboration history</li>
            </ul>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleConnect} disabled={isSubmitting} className="flex-1 gap-2">
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Heart size={16} /> Send Connection Request
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
