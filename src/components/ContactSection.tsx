
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "./RevealAnimation";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <h2 className="section-heading text-center mx-auto">Get In Touch</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            </p>
          </RevealOnScroll>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div 
                    className="flex flex-col items-center text-center p-6 border-b md:border-b-0 md:border-r border-slate-100"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-sky-100 rounded-full p-4 mb-4">
                      <MapPin className="h-6 w-6 text-sky-600" />
                    </div>
                    <h4 className="font-medium text-lg mb-2">Location</h4>
                    <p className="text-slate-600">Bareilly, Uttar Pradesh, India</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center text-center p-6 border-b md:border-b-0 md:border-r border-slate-100"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-sky-100 rounded-full p-4 mb-4">
                      <Phone className="h-6 w-6 text-sky-600" />
                    </div>
                    <h4 className="font-medium text-lg mb-2">Phone</h4>
                    <p className="text-slate-600">
                      <a href="tel:9058949485" className="hover:text-sky-600 transition-colors">
                        +91 9058949485
                      </a>
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center text-center p-6"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-sky-100 rounded-full p-4 mb-4">
                      <Mail className="h-6 w-6 text-sky-600" />
                    </div>
                    <h4 className="font-medium text-lg mb-2">Email</h4>
                    <p className="text-slate-600">
                      <a href="mailto:sauravbhadauriya17@gmail.com" className="hover:text-sky-600 transition-colors">
                        sauravbhadauriya17@gmail.com
                      </a>
                    </p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
