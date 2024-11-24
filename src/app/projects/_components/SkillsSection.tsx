import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiDigitalocean,
  SiTypescript,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiNodedotjs,
  SiExpress,
  SiApollographql,
  SiGraphql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "React.js", icon: SiReact, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Shadcn/UI", icon: SiReact, color: "text-purple-400" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-purple-500" },
  { name: "GSAP", icon: SiGreensock, color: "text-green-400" },
  { name: "DigitalOcean", icon: SiDigitalocean, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Prisma ORM", icon: SiPrisma, color: "text-teal-400" },
  { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
  { name: "Apollo Server", icon: SiApollographql, color: "text-purple-600" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  { name: "RESTful API", icon: TbApi, color: "text-orange-500" },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-800/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-700/50 flex flex-col items-center gap-3 hover:border-neutral-600 transition-all"
            >
              <skill.icon className={`text-3xl ${skill.color}`} />
              <span className="text-sm text-neutral-300 font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
