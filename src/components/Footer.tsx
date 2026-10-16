import { motion } from "framer-motion";
import { AnimatedLink } from "@/components/ui/animated-link";
import { EMAIL, EMAIL_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/contact";

const pages = [
  { label: "home", href: "/" },
  { label: "work", href: "/work" },
  { label: "about", href: "/about" },
  { label: "connect", href: "/connect" },
];

const socials = [
  { label: "github", href: "https://github.com/SauravBhadauriya" },
  { label: "linkedin", href: "https://www.linkedin.com/in/saurav-singh-developer/" },
  { label: "instagram", href: "https://www.instagram.com/saurav_thakur17/" },
  { label: "whatsapp", href: WHATSAPP_URL },
  { label: "email", href: EMAIL_URL },
];


/** Letters that bob up and down in a staggered sine-like loop. */
function WaveText({ text, offset }: { text: string; offset: number }) {
  return (
    <span className="inline-flex whitespace-nowrap">
      {Array.from(text).map((char, i) => (
        <motion.span
          key={`${offset}-${i}`}
          className="inline-block whitespace-pre"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (offset + i) * 0.08,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#121212] text-white">
      {/* Background image with a dark overlay so the content stays readable */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/Profiles/footer.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[#121212]/85" />

      {/* Animated "get in touch" header; clicking it opens WhatsApp */}
      <div className="container mx-auto px-4 pt-24 pb-20 md:pt-32">
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch on WhatsApp"
          className="mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-6 cursor-pointer text-center text-4xl sm:text-7xl lg:text-9xl font-bold italic lowercase leading-none tracking-tighter"
        >
          <WaveText text="get in" offset={0} />

          <span className="relative inline-block">
            <img
              src="/Profiles/footer.png"
              alt="Saurav Singh, Frontend Developer"
              className="h-16 w-16 sm:h-24 sm:w-24 lg:h-36 lg:w-36 rounded-xl sm:rounded-2xl object-cover"
            />
            {/* Small circular indicator overlapping the bottom edge */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-cyan-400 ring-4 ring-[#121212]" />
          </span>

          <WaveText text="touch" offset={6} />
        </motion.a>
      </div>

      <div className="container mx-auto px-4">
        {/* Middle content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8 lowercase">
          {/* Left: contact & availability */}
          <div className="space-y-8">
            <div>
              <p className="text-sm italic text-cyan-400">email</p>
              <a
                href={EMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg sm:text-xl transition-opacity hover:opacity-70"
              >
                {EMAIL}
              </a>
            </div>
            <div>
              <p className="text-sm italic text-cyan-400">whatsapp</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg sm:text-xl transition-opacity hover:opacity-70"
              >
                +91 {WHATSAPP_NUMBER}
              </a>
            </div>
            <div>
              <p className="text-sm italic text-cyan-400">available for</p>
              <p className="mt-1 text-lg sm:text-xl">full-time &amp; freelance opportunities</p>
            </div>
            <div>
              <p className="text-sm italic text-cyan-400">based in</p>
              <p className="mt-1 text-lg sm:text-xl">new delhi, india</p>
            </div>
          </div>

          {/* Right: quick navigation */}
          <div className="grid grid-cols-2 gap-8 md:justify-self-end md:w-full md:max-w-sm">
            <div>
              <p className="text-sm italic text-cyan-400">pages</p>
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
              <p className="text-sm italic text-cyan-400">socials</p>
              <ul className="mt-3 space-y-2">
                {socials.map((item) => (
                  <li key={item.label}>
                    <AnimatedLink href={item.href} external={item.href.startsWith("http")} className="text-lg">
                      {item.label}
                    </AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-3 border-t border-zinc-800 py-8 text-xs">
          <p>© {currentYear} Saurav Singh. All rights reserved</p>
          <p>Designed &amp; Built by Saurav Singh</p>
        </div>
      </div>

    </footer>
  );
}
