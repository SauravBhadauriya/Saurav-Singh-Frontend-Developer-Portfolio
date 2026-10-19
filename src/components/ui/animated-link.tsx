import * as React from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = "ease-[cubic-bezier(0.76,0,0.24,1)]";

/**
 * Text that rolls up and out of view while a copy rolls in from below.
 * Must sit inside an element with the `group` class.
 */
export function RollingText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("relative inline-block overflow-hidden align-bottom leading-tight", className)}>
      <span className={cn("block transition-transform duration-500 group-hover:-translate-y-full", ease)}>
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 block translate-y-full text-white transition-transform duration-500 group-hover:translate-y-0",
          ease
        )}
      >
        {children}
      </span>
    </span>
  );
}

type AnimatedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Opens in a new tab with safe rel attributes */
  external?: boolean;
  /** Shows a diagonal arrow that nudges on hover */
  showArrow?: boolean;
};

/**
 * Text link: rolling text, colour shift from zinc-400 to white,
 * and a slight letter-spacing expansion on hover.
 */
export function AnimatedLink({ children, className, external, showArrow, ...props }: AnimatedLinkProps) {
  return (
    <a
      {...props}
      target={external ? "_blank" : props.target}
      rel={external ? "noopener noreferrer" : props.rel}
      className={cn(
        "group inline-flex items-center gap-1.5 text-zinc-400 transition-all duration-300 ease-out hover:tracking-wider hover:text-white",
        className
      )}
    >
      <RollingText>{children}</RollingText>
      {showArrow && (
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </a>
  );
}

type HoverButtonProps = {
  children: React.ReactNode;
  href?: string;
  download?: boolean;
  external?: boolean;
  onClick?: () => void;
  icon?: LucideIcon;
  variant?: "outline" | "solid";
  className?: string;
};

/**
 * Pill button: background lightens on hover and the icon slides right.
 */
export function HoverButton({
  children,
  href,
  download,
  external,
  onClick,
  icon: Icon,
  variant = "outline",
  className,
}: HoverButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 ease-out";
  const styles =
    variant === "solid"
      ? "bg-white text-zinc-950 hover:bg-zinc-200"
      : "border border-[rgba(255,255,255,0.14)] bg-[rgba(20,20,24,0.75)] text-white backdrop-blur-[10px] hover:bg-[rgba(40,40,46,0.9)]";
  const classes = cn(base, styles, className);

  const content = (
    <>
      {children}
      {Icon && (
        <Icon
          className={cn(
            "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
            variant === "solid" ? "text-cyan-600" : "text-cyan-400"
          )}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
