import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cashkr",
    description:
      "A full-stack e-commerce device buyback solution with real-time inventory management and payment processing.",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Node Js",
      "Express Js",
    ],
    image: "/cashkr.png",
    liveUrl: "https://cashkr.com",
    githubUrl: "https://github.com/Roshan-ac",
  },
  {
    title: "Najeekai",
    description:
      "Najeekai is Nepal's premier platform connecting customers with skilled freelancers. From digital services to household tasks like plumbing and electrical work, we make it simple for customers to post jobs and freelancers to find flexible opportunities that match their expertise.",
    tech: ["React", "GSAP", "Node.js", "MongoDB"],
    image: "./rentalSys.png",
    liveUrl: "#",
    isUnderDevelopment: true,
    githubUrl: "https://github.com/Roshan-ac/Najeekai",
  },
  {
    title: "Government Fishieries Management System",
    description:
      "A full-stack web application portal and mobile app for managing fisheries and fisherman's data along with the fish market.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL","Prisma","Digital Ocean"],
    image: "./fishapp.png",
    liveUrl: "https://www.youtube.com/watch?v=DvsfJAKgBJQ&t=569s",
    githubUrl: "https://github.com/Butter-Studios/fishappfrontend",
  },
  {
    title: "AJStabe",
    description:
      "AJ Stabe is personal protfolio website of A. J. Stabe a professional graphic designer and illustrator.",
    tech: ["Next.js", "Tailwind CSS", "GSAP", "Cloudinary"],
    image: "./ajstabe.png",
    liveUrl: "https://ajstabe.com",
    githubUrl: "https://github.com/Roshan-ac/ajstabe",
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 group hover:border-neutral-700 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.isUnderDevelopment ? (
                    <span className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
                      <span className="text-white">Coming Soon</span>
                    </span>
                  ) : (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      target="_blank"
                      href={project.liveUrl}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.a>
                  )}

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    href={project.githubUrl}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                  >
                    <Github size={20} className="text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-800 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
