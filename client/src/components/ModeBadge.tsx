import { CollaborationMode } from "@/lib/types";
import { MODES } from "@/lib/mockData";
import { Box, Hammer, ClipboardList, Diamond, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModeBadgeProps {
  mode: CollaborationMode;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}

const ICONS = {
  Architect: Box,
  Builder: Hammer,
  Coordinator: ClipboardList,
  Refiner: Diamond,
  Catalyst: Zap,
};

export function ModeBadge({ mode, size = "md", showIcon = true, className }: ModeBadgeProps) {
  const def = MODES[mode];
  const Icon = ICONS[mode];

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs gap-1",
    md: "px-3 py-1 text-sm gap-1.5",
    lg: "px-4 py-1.5 text-base gap-2",
  };

  const iconSizes = {
    sm: 12,
    md: 16,
    lg: 20,
  };

  // We'll use CSS variables for the colors to keep it dynamic but hardcode mapped tailwind classes for simplicity in mockup
  // Note: In a real app, we might use the color prop from definition.
  // Here I'll map mode to specific style classes based on the color names in mockData (bg-blue-500 etc)
  
  const colorStyles = {
    Architect: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
    Builder: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
    Coordinator: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
    Refiner: "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800",
    Catalyst: "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800",
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center font-medium rounded-full border shadow-sm",
        sizeClasses[size],
        colorStyles[mode],
        className
      )}
    >
      {showIcon && <Icon size={iconSizes[size]} className="shrink-0" />}
      {mode}
    </span>
  );
}
