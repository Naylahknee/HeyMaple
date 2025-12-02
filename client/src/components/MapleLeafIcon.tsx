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
    <img
      src="/hey-maple-leaf.png"
      alt="Hey Maple"
      className={className}
      width={size}
      height={size}
      style={{ objectFit: 'contain' }}
    />
  );
}
