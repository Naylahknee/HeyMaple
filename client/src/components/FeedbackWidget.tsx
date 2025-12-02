import { useState } from "react";
import { MessageSquarePlus, X, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/use-auth";

export function FeedbackWidget() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: message.trim(),
          email: user?.email || email || null,
          pageUrl: window.location.pathname,
          feedbackType: "suggestion",
          userId: user?.id || null,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setMessage("");
        setEmail("");
        setTimeout(() => {
          setIsSubmitted(false);
          setIsOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Failed to submit feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-80 bg-card border shadow-xl rounded-xl overflow-hidden"
            data-testid="feedback-widget-panel"
          >
            <div className="bg-primary p-4 text-primary-foreground">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquarePlus className="h-5 w-5" />
                  <h3 className="font-semibold">Beta Feedback</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 rounded-full p-1 transition-colors"
                  data-testid="button-close-feedback"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm opacity-90 mt-1">
                Help us improve Hey Maple!
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
                </motion.div>
                <p className="font-medium text-foreground">Thank you!</p>
                <p className="text-sm text-muted-foreground">
                  Your feedback helps us grow.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="feedback-message" className="text-sm">
                    What's on your mind?
                  </Label>
                  <Textarea
                    id="feedback-message"
                    placeholder="Share your ideas, report bugs, or suggest improvements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[100px] resize-none text-sm"
                    data-testid="input-feedback-message"
                  />
                </div>

                {!user && (
                  <div className="space-y-2">
                    <Label htmlFor="feedback-email" className="text-sm">
                      Email (optional)
                    </Label>
                    <Input
                      id="feedback-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-sm"
                      data-testid="input-feedback-email"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">
                    Page: {window.location.pathname}
                  </span>
                  <Button
                    type="submit"
                    size="sm"
                    disabled={!message.trim() || isSubmitting}
                    data-testid="button-submit-feedback"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send <Send className="ml-1.5 h-3.5 w-3.5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-open-feedback"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquarePlus className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
