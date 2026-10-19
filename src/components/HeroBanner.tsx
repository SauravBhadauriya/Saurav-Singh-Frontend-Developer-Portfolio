import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { EMAIL_URL, WHATSAPP_URL } from "@/lib/contact";

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
  { label: "Email", href: EMAIL_URL, icon: Mail },
];

const iconClass =
  "rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(20,20,24,0.75)] p-3 text-cyan-400 backdrop-blur-[10px] transition-colors duration-300 hover:bg-[rgba(40,40,46,0.9)]";

/**
 * Shared dark hero used on every page, so the layout is identical everywhere
 * and only the text changes. The silhouette photo sits on the right and a dark
 * gradient on the left keeps the text readable. The global Navbar is rendered
 * by each page above this banner.
 */
export default function HeroBanner({ title, subtitle, description, actions, aside, id }: HeroBannerProps) {
  return (
    <section id={id} className="relative isolate flex flex-col justify-center hero-fill overflow-hidden pt-[clamp(112px,14vh,160px)] pb-[clamp(64px,10vh,120px)]">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[position:72%_center] md:bg-[position:64%_center] lg:bg-[position:70%_center]"
        style={{ backgroundImage: "url('/Profiles/hero.png')" }}
      />
      {/* Dark on the text side, fading to the photo; mobile uses a vertical fade */}
      <div className="hero-overlay" />
      <div className="hero-bottom-fade" />

      <div className="site-container">
        <motion.div
          className="flex flex-col items-start text-left md:max-w-[54vw] lg:max-w-[min(56vw,760px)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <h1 className="display-heading mb-[clamp(24px,3vw,40px)]">
                {title}
              </h1>

              <p className="mb-[var(--space-3)] text-lg font-medium tracking-tight text-white sm:text-xl md:text-2xl">{subtitle}</p>

              <p className="mb-[var(--space-5)] max-w-[560px] text-sm leading-[1.6] text-[rgba(255,255,255,0.82)] [text-shadow:0_1px_12px_rgba(0,0,0,0.45)] sm:text-base md:text-lg">{description}</p>

              {actions && <div className="mb-[var(--space-5)] flex flex-wrap items-center gap-[var(--space-3)]">{actions}</div>}

              <div className="flex flex-wrap items-center gap-[var(--space-3)]">
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
          className="hero-aside"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-aside-card">
            <p className="text-xs uppercase tracking-widest text-[rgba(255,255,255,0.7)]">{aside.label}</p>
            <p className="font-medium text-white">{aside.title}</p>
            <p className="text-sm text-zinc-400">{aside.detail}</p>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <MapPin className="h-4 w-4" />
              {aside.location}
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
