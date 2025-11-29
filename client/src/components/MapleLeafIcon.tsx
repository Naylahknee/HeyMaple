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
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer leaf shape */}
      <path
        d="M 50 15 Q 75 25 75 50 Q 75 80 50 85 Q 25 80 25 50 Q 25 25 50 15"
        fill="currentColor"
        stroke="none"
      />
      
      {/* Inner vein/curve detail */}
      <path
        d="M 50 20 Q 65 30 65 50 Q 65 75 50 80"
        fill="none"
        stroke="white"
        strokeWidth="3"
        opacity="0.6"
      />

      {/* Stem */}
      <line x1="50" y1="85" x2="50" y2="95" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
