import React from 'react'
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiC,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3, SiRedux, SiVite, SiFigma,
  SiNodedotjs, SiExpress, SiFirebase, SiSocketdotio, SiPrisma,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiSupabase,
  SiDocker, SiAmazonwebservices, SiVercel, SiNetlify, SiRender,
  SiGit, SiGithub, SiPostman, SiLinux, SiNpm
} from 'react-icons/si'
import { SiClerk, SiJsonwebtokens } from "react-icons/si";
import { HiUpload } from "react-icons/hi";
import { FaJava } from 'react-icons/fa'
import { HiCode, HiDesktopComputer, HiServer, HiDatabase, HiCloud, HiCog, HiLightBulb } from 'react-icons/hi'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: "Languages",
    icon: <HiCode />,
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
    hoverBg: "group-hover:bg-yellow-500",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
    ]
  },
  {
    name: "Frontend",
    icon: <HiDesktopComputer />,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    hoverBg: "group-hover:bg-cyan-500",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ]
  },
  {
    name: "Backend",
    icon: <HiServer />,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
    hoverBg: "group-hover:bg-green-500",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Zustand", emoji: "🐻", color: "#443e38" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#ffffff" },
      { name: "Clerk Auth", icon: SiClerk, color: "#6C47FF" },
      { name: "Multer", icon: HiUpload, color: "#4CAF50" },
    ]
  },
  {
    name: "Databases",
    icon: <HiDatabase />,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
    hoverBg: "group-hover:bg-purple-500",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: <HiCloud />,
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
    hoverBg: "group-hover:bg-orange-500",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
    ]
  },
  {
    name: "Tools & Workflow",
    icon: <HiCog />,
    color: "from-slate-500/20 to-zinc-500/20",
    iconColor: "text-slate-300",
    hoverBg: "group-hover:bg-slate-500",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "npm", icon: SiNpm, color: "#CB3837" },
      { name: "VS Code", emoji: "💻" },
    ]
  },
  {
    name: "Soft Skills",
    icon: <HiLightBulb />,
    color: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-400",
    hoverBg: "group-hover:bg-indigo-500",
    skills: [
      { name: "Problem Solving", emoji: "🧩" },
      { name: "Team Collaboration", emoji: "🤝" },
      { name: "Communication", emoji: "💬" },
      { name: "Quick Learner", emoji: "🚀" },
      { name: "Time Management", emoji: "⏰" },
      { name: "Leadership", emoji: "👑" },
    ]
  },
];

const MySkills = () => {
  return (
    <section className="section-padding py-24" id="skills">
      <div className="flex flex-col items-center mb-14 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-4 uppercase leading-tight">
          TECHNICAL <span className="text-gradient">STACK</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full mb-4"></div>
        <p className="text-slate-500 text-sm font-medium text-center max-w-md">
          Technologies & tools I use to bring ideas to life
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
            }}
          >
            <Tilt 
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10} 
              scale={1.02} 
              transitionSpeed={2000} 
              className="h-full"
            >
              <div className="cursor-target h-full glass-card p-6 md:p-7 rounded-[28px] group relative overflow-hidden">
                {/* Subtle gradient glow on hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-3 w-11 h-11 rounded-xl bg-white/5 ${category.iconColor} text-xl flex items-center justify-center ${category.hoverBg} group-hover:text-white transition-all duration-300 transform group-hover:rotate-6`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">{category.name}</h3>
                      <span className="text-[10px] font-bold text-slate-600">{category.skills.length} skills</span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <span
                          key={skill.name}
                          className="cursor-target inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-semibold rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:border-indigo-500/40 hover:bg-white/[0.06] hover:text-white transition-all duration-200"
                        >
                          {Icon ? (
                            <Icon className="text-sm flex-shrink-0" style={{ color: skill.color }} />
                          ) : (
                            <span className="text-sm flex-shrink-0">{skill.emoji}</span>
                          )}
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default MySkills
