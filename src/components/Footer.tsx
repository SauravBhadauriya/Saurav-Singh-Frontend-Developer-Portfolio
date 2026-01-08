
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-semibold font-poppins mb-2">Saurav Singh</h3>
            <p className="text-slate-400">Frontend Software Developer</p>
          </div>
          
          {/* <div className="flex space-x-6 gap-4 justify-center flex-wrap mb-6 md:mb-0">
            <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-sky-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div> */}
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/SauravBhadauriya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-400 transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/saurav-singh-163a9223a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sky-400 transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="mailto:sauravbhadauriya17@gmail.com" 
                className="hover:text-sky-400 transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0"> I hereby declare that the above information provided is true to the best of my knowledge.</p>
          <p className="text-slate-400 mb-4 md:mb-0">© {currentYear} Saurav Singh. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
