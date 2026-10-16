import React from "react";

/**
 * Alternate logo: a filled cyan tile with a dark "</>" code mark.
 * Compare with LogoMonogram before swapping it into the navbar.
 */
export function LogoBracket({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Saurav Dev logo"
      viewBox="0 0 40 40"
      width={40}
      height={40}
      className={className}
    >
      <rect x="0" y="0" width="40" height="40" rx="10" fill="#22d3ee" />
      <path
        d="M16 12 L9 20 L16 28 M24 12 L31 20 L24 28 M22 10 L18 30"
        fill="none"
        stroke="#09090b"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
