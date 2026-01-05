
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Code, Users } from "lucide-react";
import { RevealOnScroll, SlideInFromLeft, SlideInFromRight } from "./RevealAnimation";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <h2 className="section-heading text-center mx-auto">About Me</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Frontend Software Developer with over 1+ years of experience creating responsive and 
              user-friendly web applications.
            </p>
          </RevealOnScroll>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <SlideInFromLeft width="100%" delay={0.3} className="lg:col-span-7">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
              <CardContent className="p-6 lg:p-8">
                <motion.p 
                  className="text-slate-700 mb-4 text-base lg:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  I am a Passionate Frontend Software Developer with experience in Next.js, React.js, JavaScript and various modern frontend technologies. My expertise lies in 
                  developing high-performance web applications with a focus on clean, maintainable code 
                  and exceptional user experiences.
                </motion.p>
                <motion.p 
                  className="text-slate-700 mb-4 text-base lg:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  With over 1+ years of professional experience, I am eager to contribute my technical expertise, problem-solving skills, and collaborate effectively within innovative software development environments.

                </motion.p>
                <motion.p 
                  className="text-slate-700 text-base lg:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  I'm constantly learning and exploring new technologies to stay updated with the
                  latest trends in frontend development. I'm particularly interested in optimizing
                  web performance, creating accessible user interfaces, and implementing modern design systems.
                </motion.p>
              </CardContent>
            </Card>
          </SlideInFromLeft>
          
          <SlideInFromRight width="100%" delay={0.5} className="lg:col-span-5">
            <Card className="border-none shadow-lg h-full hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-semibold font-poppins mb-6 text-sky-700">Personal Details</h3>
                
                <div className="space-y-5">
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-sky-100 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Location</h4>
                      <p className="text-slate-600">Bareilly, Uttar Pradesh, India</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-sky-100 p-3 rounded-full">
                      <Calendar className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Experience</h4>
                      <p className="text-slate-600">1+ Years</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-sky-100 p-3 rounded-full">
                      <Code className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Main Tech Stack</h4>
                      <p className="text-slate-600">React, Next.js, TypeScript</p>
                    </div>
                  </motion.div>
                  
                  {/* <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-sky-100 p-3 rounded-full">
                      <Users className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Team Leadership</h4>
                      <p className="text-slate-600">Led teams of up to 3 developers</p>
                    </div>
                  </motion.div> */}
                </div>
              </CardContent>
            </Card>
          </SlideInFromRight>
        </div>
      </div>
    </section>
  );
}
