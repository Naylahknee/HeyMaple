import React from "react";

interface MapleLeafIconProps {
  className?: string;
  size?: number;
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
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer leaf outline */}
      <path
        d="M 50 10 
           C 75 15 85 35 85 55 
           C 85 75 70 85 50 90 
           C 30 85 15 75 15 55 
           C 15 35 25 15 50 10 Z"
        fill="none"
        stroke="#22c55e"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner vein curve */}
      <path
        d="M 35 55 Q 50 45 60 35"
        fill="none"
        stroke="#22c55e"
        strokeWidth="6"
        strokeLinecap="round"
      />
      
      {/* Stem */}
      <path
        d="M 40 85 L 30 100"
        fill="none"
        stroke="#22c55e"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
