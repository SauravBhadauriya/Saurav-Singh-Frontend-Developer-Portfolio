import React from "react";

/**
 * Alternate logo: an "SD" monogram in a cyan-outlined square with a small
 * code bracket under it. Swap it into the navbar in place of the current mark.
 */
export function LogoMonogram({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="SD logo"
      viewBox="0 0 40 40"
      width={40}
      height={40}
      fill="none"
      className={className}
    >
      <rect x="1" y="1" width="38" height="38" rx="10" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400" />
      <text
        x="20"
        y="22"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="white"
      >
        SD
      </text>
      <path d="M15 29 L13 31 L15 33 M25 29 L27 31 L25 33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400" />
    </svg>
  );
}
