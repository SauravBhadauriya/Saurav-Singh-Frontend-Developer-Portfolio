import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { RollingText } from "@/components/ui/animated-link";

const navLinks = [
  { title: "Home", to: "/" },
  { title: "Work", to: "/work" },
  { title: "About", to: "/about" },
  { title: "Connect", to: "/connect" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pointer-events-auto w-full max-w-5xl rounded-2xl md:rounded-full border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md shadow-lg shadow-black/30">
        <div className="flex items-center justify-between px-6 py-3">
          <Link to="/" className="group flex items-center gap-2.5" aria-label="Saurav Dev, home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 transition-colors duration-300 group-hover:bg-cyan-400/20">
              <Code className="h-4 w-4 text-cyan-400" aria-hidden="true" />
            </span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-base font-bold tracking-tight text-white opacity-0 transition-all duration-300 ease-out group-hover:max-w-[8rem] group-hover:opacity-100">
              Saurav <span className="text-cyan-400">Dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.title}
                  to={link.to}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group relative text-sm transition-colors duration-300",
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  )}
                >
                  <RollingText>{link.title}</RollingText>
                  {isActive && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-400"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 text-zinc-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="md:hidden overflow-hidden border-t border-zinc-800/80"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-6 py-3.5 text-sm transition-colors hover:bg-white/5",
                    pathname === link.to ? "text-white" : "text-zinc-400"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
