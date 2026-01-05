
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Find which section is currently in view
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY - 100;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + rect.height) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-xl font-bold font-poppins"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={cn(
            "transition-colors",
            scrolled ? "text-sky-600" : "text-sky-400"
          )}>Saurav</span>
          <span className={cn(
            "ml-2 transition-colors",
            scrolled ? "text-slate-800" : "text-white"
          )}>Singh</span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              className={cn(
                "nav-link font-medium transition-colors relative",
                activeSection === link.href.replace("#", "") 
                  ? scrolled ? "text-sky-600" : "text-sky-400" 
                  : scrolled ? "text-slate-700" : "text-white",
              )}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {link.title}
              {activeSection === link.href.replace("#", "") && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon"
          className={cn(
            "md:hidden",
            scrolled ? "text-slate-800" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className="flex flex-col items-center bg-white w-full absolute md:hidden shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                className={cn(
                  "py-4 px-4 w-full text-center font-medium border-b border-slate-100",
                  activeSection === link.href.replace("#", "") ? "text-sky-600" : "text-slate-700"
                )}
                // onClick={() => setIsOpen(false)}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.replace("#", "");
                  const section = document.getElementById(targetId);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                  // Wait before closing the menu
                  setTimeout(() => setIsOpen(false), 300);
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                whileHover={{ backgroundColor: "rgba(14, 165, 233, 0.1)" }}
              >
                {link.title}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
