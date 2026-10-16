import React from "react";
import { AnimatedLink } from "@/components/ui/animated-link";

const pages = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

const socials = [
  { label: "github", href: "https://github.com/SauravBhadauriya" },
  { label: "linkedin", href: "https://www.linkedin.com/in/saurav-singh-developer/" },
  { label: "twitter / x", href: "https://x.com/" },
  { label: "email", href: "mailto:sauravbhadauriya17@gmail.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#121212] text-white">
      {/* Background image with a dark overlay so the content stays readable */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/footer.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[#121212]/85" />

      {/* Top CTA banner */}
      <div className="container mx-auto px-4 pt-24 pb-20 md:pt-32">
        <h2 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-6 text-5xl sm:text-7xl lg:text-9xl font-bold italic lowercase leading-none tracking-tighter text-center">
          <span>get in</span>

          <span className="relative inline-block">
            <img
              src="/footer.png"
              alt="Saurav Singh"
              className="h-16 w-16 sm:h-24 sm:w-24 lg:h-36 lg:w-36 rounded-xl sm:rounded-2xl object-cover"
            />
            {/* Small circular indicator overlapping the bottom edge */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-amber-500 ring-4 ring-[#121212]" />
          </span>

          <span>touch</span>
        </h2>
      </div>

      <div className="container mx-auto px-4">
        {/* Middle content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8 lowercase">
          {/* Left: contact & availability */}
          <div className="space-y-8">
            <div>
              <p className="text-sm italic text-amber-500">email</p>
              <a
                href="mailto:sauravbhadauriya17@gmail.com"
                className="mt-1 block text-lg sm:text-xl text-zinc-200 transition-colors hover:text-white"
              >
                sauravbhadauriya17@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm italic text-amber-500">available for</p>
              <p className="mt-1 text-lg sm:text-xl text-zinc-200">full-time &amp; freelance opportunities</p>
            </div>
            <div>
              <p className="text-sm italic text-amber-500">based in</p>
              <p className="mt-1 text-lg sm:text-xl text-zinc-200">new delhi, india</p>
            </div>
          </div>

          {/* Right: quick navigation */}
          <div className="grid grid-cols-2 gap-8 md:justify-self-end md:w-full md:max-w-sm">
            <div>
              <p className="text-sm italic text-amber-500">pages</p>
              <ul className="mt-3 space-y-2">
                {pages.map((item) => (
                  <li key={item.label}>
                    <AnimatedLink href={item.href} className="text-lg">
                      {item.label}
                    </AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm italic text-amber-500">socials</p>
              <ul className="mt-3 space-y-2">
                {socials.map((item) => (
                  <li key={item.label}>
                    <AnimatedLink
                      href={item.href}
                      external={item.href.startsWith("http")}
                      className="text-lg"
                    >
                      {item.label}
                    </AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-zinc-800 py-8 text-xs text-zinc-500">
          <p>© {currentYear} Saurav Singh. All rights reserved</p>
          <p>Designed &amp; Built by Saurav Singh</p>
        </div>
      </div>
    </footer>
  );
}
