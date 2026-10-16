import { EMAIL_URL } from "@/lib/contact";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./RevealAnimation";

const contacts = [
  {
    icon: MapPin,
    label: "Location",
    content: <p className="text-zinc-400">New Delhi, Delhi - 110016</p>,
  },
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a href="tel:+919058949485" className="text-zinc-400 transition-colors hover:text-white">
        +91 9058949485
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a href={EMAIL_URL} target="_blank" rel="noopener noreferrer" className="break-all text-zinc-400 transition-colors hover:text-white">
        sauravbhadauriya17@gmail.com
      </a>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <h2 className="section-heading mx-auto">Get In Touch</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-16">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            </p>
          </RevealOnScroll>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {contacts.map((item, index) => (
              <div
                key={item.label}
                className={
                  "flex flex-col items-center text-center p-8 " +
                  (index < contacts.length - 1 ? "border-b md:border-b-0 md:border-r border-zinc-800" : "")
                }
              >
                <div className="mb-4 rounded-full border border-zinc-800 bg-zinc-950 p-4">
                  <item.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="mb-2 text-lg font-medium text-white">{item.label}</h4>
                {item.content}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
