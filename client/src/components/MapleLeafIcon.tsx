import React from "react";

interface MapleLeafIconProps {
  className?: string;
  size?: number; // in px
}

export function MapleLeafIcon({
  className = "w-6 h-6",
  size = 24,
}: MapleLeafIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main leaf outline */}
      <path
        d="M 20 70 Q 30 50 40 35 Q 60 15 75 20 Q 80 25 78 45 Q 75 65 55 75 Q 35 85 20 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner vein detail */}
      <path
        d="M 35 55 Q 50 45 60 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      
      {/* Stem */}
      <path
        d="M 22 70 Q 15 80 10 95"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
