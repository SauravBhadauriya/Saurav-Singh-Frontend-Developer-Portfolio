import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contact";

export interface HeroAside {
  /** Small uppercase label above the card title */
  label: string;
  /** Card headline */
  title: string;
  /** Second line under the headline */
  detail: string;
  /** Location line with a pin icon */
  location: string;
}

interface HeroBannerProps {
  /** Large headline, can include <br /> */
  title: React.ReactNode;
  /** Role / sub-caption line */
  subtitle: string;
  /** Short paragraph under the subtitle */
  description: string;
  /** Buttons shown under the description */
  actions?: React.ReactNode;
  /** Text for the card on the right */
  aside: HeroAside;
  /** Section id, used for in-page anchors */
  id?: string;
}

const socials = [
  { label: "GitHub", href: "https://github.com/SauravBhadauriya", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saurav-singh-developer/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/saurav_thakur17/", icon: Instagram },
  { label: "WhatsApp", href: WHATSAPP_URL, icon: WhatsAppIcon },
  { label: "Email", href: "mailto:sauravbhadauriya17@gmail.com", icon: Mail },
];

const iconClass = "rounded-full bg-white/10 p-3 text-cyan-400 transition-colors duration-300 hover:bg-white/20";

/**
 * Shared dark hero used on every page, so the layout is identical everywhere
 * and only the text changes. The silhouette photo sits on the right and a dark
 * gradient on the left keeps the text readable. The global Navbar is rendered
 * by each page above this banner.
 */
export default function HeroBanner({ title, subtitle, description, actions, aside, id }: HeroBannerProps) {
  return (
    <section id={id} className="relative isolate flex min-h-screen items-end overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-28">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[position:72%_center] md:bg-center"
        style={{ backgroundImage: "url('/Profiles/hero.png')" }}
      />
      {/* Mobile: darker fade from the bottom, where the text sits */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#09090b]/20 via-[#09090b]/60 to-[#09090b] md:hidden" />
      {/* Desktop: dark fade on the left so the text reads, clear over the photo */}
      <div
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(9,9,11,0.97) 0%, rgba(9,9,11,0.9) 20%, rgba(9,9,11,0.7) 35%, rgba(9,9,11,0.4) 50%, rgba(9,9,11,0.15) 62%, rgba(9,9,11,0) 72%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#09090b] to-transparent md:h-40" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-8xl">
              {title}
            </h1>

            <p className="mt-5 text-lg font-medium tracking-tight text-white sm:text-xl md:mt-6 md:text-2xl">{subtitle}</p>

            <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg md:text-zinc-400">{description}</p>

            {actions && <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">{actions}</div>}

            <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8 md:gap-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className={iconClass}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-xs lg:col-span-4 lg:justify-self-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 backdrop-blur-md">
              <p className="mb-3 text-xs uppercase tracking-widest text-zinc-500">{aside.label}</p>
              <p className="font-medium text-white">{aside.title}</p>
              <p className="mt-1 text-sm text-zinc-400">{aside.detail}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                <MapPin className="h-4 w-4" />
                {aside.location}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
