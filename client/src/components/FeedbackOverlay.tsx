import { useState, useCallback, useRef, useEffect } from "react";
import { MessageCircle, Send, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/use-auth";

interface FeedbackNode {
  id: string;
  x: number;
  y: number;
  sectionName: string;
  elementSelector: string;
}

const CATEGORIES = [
  { value: "ui", label: "UI/Design" },
  { value: "ux", label: "UX/Flow" },
  { value: "bug", label: "Bug" },
  { value: "feature", label: "Feature Idea" },
  { value: "content", label: "Content" },
  { value: "general", label: "General" },
];

export function FeedbackOverlay() {
  const { user } = useAuth();
  const [isActive, setIsActive] = useState(false);
  const [feedbackNode, setFeedbackNode] = useState<FeedbackNode | null>(null);
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const getSectionName = useCallback((element: HTMLElement): string => {
    let current: HTMLElement | null = element;
    while (current) {
      const testId = current.getAttribute("data-testid");
      if (testId) return testId;

      const sectionTag = current.tagName.toLowerCase();
      if (sectionTag === "section") {
        const heading = current.querySelector("h1, h2, h3");
        if (heading) return heading.textContent?.slice(0, 50) || "Section";
        return "Section";
      }

      if (current.classList.contains("card-maple")) {
        const heading = current.querySelector("h2, h3, h4");
        if (heading) return `Card: ${heading.textContent?.slice(0, 40)}`;
        return "Card";
      }

      if (current.getAttribute("data-section")) {
        return current.getAttribute("data-section") || "Section";
      }

      current = current.parentElement;
    }
    return "Page";
  }, []);

  const getElementSelector = useCallback((element: HTMLElement): string => {
    const parts: string[] = [];
    let current: HTMLElement | null = element;
    let depth = 0;
    while (current && depth < 4) {
      const testId = current.getAttribute("data-testid");
      if (testId) {
        parts.unshift(`[data-testid="${testId}"]`);
        break;
      }
      let selector = current.tagName.toLowerCase();
      if (current.className && typeof current.className === "string") {
        const mainClass = current.className.split(" ").find(c => 
          !c.startsWith("hover:") && !c.startsWith("transition") && c.length < 30
        );
        if (mainClass) selector += `.${mainClass}`;
      }
      parts.unshift(selector);
      current = current.parentElement;
      depth++;
    }
    return parts.join(" > ");
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isActive || feedbackNode) return;
    
    const target = e.target as HTMLElement;
    if (target.closest("[data-feedback-overlay]")) return;

    const section = getSectionName(target);
    setHoveredSection(section);
  }, [isActive, feedbackNode, getSectionName]);

  const handleClick = useCallback((e: MouseEvent) => {
    if (!isActive || feedbackNode) return;
    
    const target = e.target as HTMLElement;
    if (target.closest("[data-feedback-overlay]")) return;
    
    e.preventDefault();
    e.stopPropagation();

    const rect = document.body.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY + window.scrollY;
    
    setFeedbackNode({
      id: Date.now().toString(),
      x,
      y,
      sectionName: getSectionName(target),
      elementSelector: getElementSelector(target),
    });
  }, [isActive, feedbackNode, getSectionName, getElementSelector]);

  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousemove", handleMouseMove, true);
      document.addEventListener("click", handleClick, true);
      document.body.style.cursor = "crosshair";
    } else {
      document.body.style.cursor = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove, true);
      document.removeEventListener("click", handleClick, true);
      document.body.style.cursor = "";
    };
  }, [isActive, handleMouseMove, handleClick]);

  const handleSubmit = async () => {
    if (!comment.trim() || !feedbackNode) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/element-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user?.email || email || null,
          pageUrl: window.location.pathname,
          elementSelector: feedbackNode.elementSelector,
          sectionName: feedbackNode.sectionName,
          category,
          comment: comment.trim(),
          positionX: Math.round(feedbackNode.x),
          positionY: Math.round(feedbackNode.y),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFeedbackNode(null);
          setComment("");
          setCategory("general");
        }, 1500);
      }
    } catch (error) {
      console.error("Failed to submit element feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFeedbackNode(null);
    setComment("");
    setCategory("general");
  };

  const handleToggle = () => {
    if (isActive) {
      setIsActive(false);
      setFeedbackNode(null);
      setComment("");
      setHoveredSection(null);
    } else {
      setIsActive(true);
    }
  };

  return (
    <>
      {isActive && !feedbackNode && (
        <div 
          className="fixed top-16 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
          data-feedback-overlay
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-foreground text-white px-5 py-2.5 rounded-full shadow-lg text-sm font-medium flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Click anywhere to leave feedback
            {hoveredSection && (
              <span className="text-white/60 ml-1 max-w-[200px] truncate">
                &middot; {hoveredSection}
              </span>
            )}
          </motion.div>
        </div>
      )}

      <AnimatePresence>
        {feedbackNode && (
          <div 
            className="fixed inset-0 z-[99] bg-black/10"
            data-feedback-overlay
            onClick={(e) => {
              if (e.target === e.currentTarget) handleCancel();
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute z-[101]"
              style={{
                left: Math.min(feedbackNode.x, window.innerWidth - 340),
                top: Math.min(feedbackNode.y - window.scrollY, window.innerHeight - 380),
              }}
              data-feedback-overlay
            >
              <div className="w-80 bg-white border border-border rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary px-4 py-3 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span className="font-semibold text-sm">Leave Feedback</span>
                    </div>
                    <button 
                      onClick={handleCancel}
                      className="hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-white/70 mt-1 truncate">
                    {feedbackNode.sectionName}
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-6 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    >
                      <CheckCircle className="h-10 w-10 text-leaf mx-auto mb-2" />
                    </motion.div>
                    <p className="font-semibold text-sm">Feedback saved!</p>
                  </div>
                ) : (
                  <div className="p-4 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat.value}
                          onClick={() => setCategory(cat.value)}
                          className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${
                            category === cat.value
                              ? "bg-primary text-white"
                              : "bg-secondary text-muted-foreground hover:bg-primary/10"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>

                    <Textarea
                      placeholder="What do you think about this section?"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="min-h-[80px] resize-none text-sm"
                      autoFocus
                    />

                    {!user && (
                      <Input
                        type="email"
                        placeholder="Email (optional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-sm"
                      />
                    )}

                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleSubmit}
                        disabled={!comment.trim() || isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : (
                          <>Send <Send className="ml-1 h-3 w-3" /></>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: feedbackNode.x,
                top: feedbackNode.y - window.scrollY,
              }}
            >
              <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <MessageCircle className="h-3 w-3 text-white" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleToggle}
        className={`fixed bottom-4 left-4 z-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all ${
          isActive 
            ? "bg-leaf text-white" 
            : "bg-foreground text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-toggle-feedback-mode"
        data-feedback-overlay
      >
        <MessageCircle className="h-5 w-5" />
      </motion.button>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-5 left-16 z-50 bg-foreground text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg pointer-events-none"
          data-feedback-overlay
        >
          Feedback Mode ON
        </motion.div>
      )}
    </>
  );
}
