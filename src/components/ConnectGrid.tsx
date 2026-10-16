import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Github, Instagram, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { EMAIL, EMAIL_URL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/contact";


type ConnectCard = {
  label: string;
  value: string;
  icon: LucideIcon | typeof WhatsAppIcon;
  /** Link target; external URLs open in a new tab */
  href?: string;
  /** Downloads the linked file instead of opening it */
  download?: boolean;
};

export const connectCards: ConnectCard[] = [
  { label: "LinkedIn", value: "Professional profile", icon: Linkedin, href: "https://www.linkedin.com/in/saurav-singh-developer/" },
  { label: "GitHub", value: "Code & projects", icon: Github, href: "https://github.com/SauravBhadauriya" },
  { label: "Email", value: EMAIL, icon: Mail, href: EMAIL_URL },
  { label: "Instagram", value: "@saurav_thakur17", icon: Instagram, href: "https://www.instagram.com/saurav_thakur17/" },
  { label: "WhatsApp", value: `+91 ${WHATSAPP_NUMBER}`, icon: WhatsAppIcon, href: WHATSAPP_URL },
  { label: "Hire Me", value: "Download my resume", icon: Briefcase, href: "/Resume/Saurav_Singh_Resume.pdf", download: true },
];

export const cardClass =
  "group flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-7 text-left transition-colors duration-500 hover:border-zinc-600";

export function CardBody({ card }: { card: ConnectCard }) {
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="rounded-full border border-zinc-800 bg-zinc-950 p-3">
          <card.icon className="h-5 w-5 text-cyan-400" />
        </div>
        <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400" />
      </div>
      <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">{card.label}</h3>
      <p className="mt-1 break-all text-sm text-zinc-400">{card.value}</p>
    </>
  );
}

/** Contact cards in a three-column grid. Every card is a link. */
export default function ConnectGrid() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {connectCards.map((card, index) => {
          const motionProps = {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: index * 0.08 },
          };

          const external = card.href?.startsWith("http");
          return (
            <motion.a
              key={card.label}
              href={card.href}
              download={card.download}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={cardClass}
              {...motionProps}
            >
              <CardBody card={card} />
            </motion.a>
          );
        })}
      </div>

    </>
  );
}
