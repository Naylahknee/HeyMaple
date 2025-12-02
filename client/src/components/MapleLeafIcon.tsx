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
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer leaf shape - Green */}
      <path
        d="M 60 140 C 50 120 45 100 50 75 C 55 50 75 35 100 32 C 130 28 155 45 160 75 C 165 105 150 140 120 160 C 100 175 70 170 60 140 Z"
        fill="#22c55e"
        stroke="#16a34a"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner vein detail */}
      <path
        d="M 90 110 Q 110 95 130 80"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.5"
      />
      
      {/* Stem */}
      <path
        d="M 65 145 Q 55 165 45 185"
        stroke="#16a34a"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
}
