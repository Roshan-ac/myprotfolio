"use client";
import React from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const socialsLinks = [
  {
    name: "github",
    link: "https://github.com/Roshan-ac",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/reshamac/",
  },
  {
    name: "mail",
    link: "mailto:acharyaresham354@gmail.com",
  },
];

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-0 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-green-400 bg-green-400/10 px-4 py-2 rounded-full text-sm font-medium border border-green-400/20">
                  Full Stack Developer
                </span>
              </motion.div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white space-y-3">
                  <span className="text-neutral-400 font-normal text-2xl block mb-2">
                    Hello, I'm
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 animate-gradient">
                    Resham Acharya
                  </span>
                </h1>

                <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
                  Passionate developer crafting elegant solutions and delivering
                  exceptional digital experiences.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                download={true}
                href="/Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-medium flex items-center gap-2 transition-all shadow-lg shadow-green-500/25"
              >
                Download Resume
                <Download size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/projects"
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 cursor-pointer bg-neutral-800/80 hover:bg-neutral-700 text-white rounded-lg font-medium transition-all backdrop-blur-sm border border-neutral-700"
              >
                View Projects
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              {socialsLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="p-4 bg-neutral-800/80 hover:bg-neutral-700 rounded-full text-neutral-400 hover:text-white transition-all backdrop-blur-sm border border-neutral-700 shadow-lg"
                >
                  {social.name === "github" && <Github size={22} />}
                  {social.name === "linkedin" && <Linkedin size={22} />}
                  {social.name === "mail" && <Mail size={22} />}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 flex justify-center"
          >
            <div className="relative -left-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />

              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-neutral-800/50 p-1 backdrop-blur-sm">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-800/50 backdrop-blur-sm">
                  <img
                    src="/myPhoto.png"
                    alt="Resham Acharya"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -z-10 w-72 h-72 rounded-full border border-neutral-700/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </motion.div>

          {/* Stats Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4"
          >
            <div className="bg-neutral-800/30 backdrop-blur-xl rounded-2xl p-10 space-y-8 border border-neutral-700/50 shadow-xl">
              {[
                { number: "2+", text: "Years of Experience" },
                { number: "4+", text: "Projects Completed" },
                { number: "8+", text: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="space-y-3"
                >
                  <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                    {stat.number}
                  </h3>
                  <p className="text-neutral-400 text-lg">{stat.text}</p>
                  <div className="h-1 w-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
