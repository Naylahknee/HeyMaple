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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main maple leaf shape */}
      <path
        d="
          M50 10
          L55 25
          L70 20
          L60 35
          L80 40
          L65 50
          L55 65
          L75 80
          L55 70
          L50 90
          L45 70
          L25 80
          L35 65
          L15 60
          L35 50
          L20 40
          L40 35
          L30 20
          L45 25
          Z
        "
        fill="currentColor"
      />

      {/* Stem */}
      <rect x="48" y="90" width="4" height="8" fill="currentColor" />
    </svg>
  );
}
