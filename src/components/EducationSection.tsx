
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";
import { RevealOnScroll, SlideInFromLeft, SlideInFromRight } from "./RevealAnimation";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "Lucknow, India",
    period: "2024",
    score: "68%"
  },
  {
    degree: "12th Grade",
    institution: "SVM Inter College",
    location: "Bareilly, India",
    period: "2018",
    score: "66%"
  },
  {
    degree: "10th Grade",
    institution: "SVM Inter College",
    location: "Bareilly, India",
    period: "2016",
    score: "84%"
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <RevealOnScroll>
            <h2 className="section-heading text-center mx-auto">Education & Awards</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              My academic journey and professional recognition.
            </p>
          </RevealOnScroll>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                <CardHeader className="pb-3 flex flex-row items-start space-x-4">
                  <div className="bg-sky-100 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-poppins">{edu.degree}</h3>
                    <p className="text-slate-700">{edu.institution}</p>
                    <p className="text-slate-600 text-sm">{edu.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                    <span className="text-slate-600">{edu.period}</span>
                    <span className="font-medium text-sky-600">{edu.score}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        > */}
          {/* <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 font-poppins text-center">Awards & Recognition</h3>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="bg-sky-100 rounded-full p-4 md:mt-1">
                    <Award className="h-8 w-8 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">Spotlight Award (2023)</h4>
                    <p className="text-slate-600 mb-4">
                      Received at Appinventiv for outstanding performance, innovation, and contribution to 
                      project success. This recognition highlights exceptional problem-solving abilities and 
                      dedication to delivering high-quality frontend solutions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-sky-50 text-sky-700 border-sky-100">Outstanding Performance</Badge>
                      <Badge className="bg-sky-50 text-sky-700 border-sky-100">Innovation</Badge>
                      <Badge className="bg-sky-50 text-sky-700 border-sky-100">Technical Excellence</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Animation line */}
              {/* <motion.div 
                className="h-1 bg-gradient-to-r from-sky-400 to-blue-500" 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </Card>
          </div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}
