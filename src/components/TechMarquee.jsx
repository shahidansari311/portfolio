import React from "react";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiGit,
  SiLinux,
} from "react-icons/si";

const techStack = [
  { icon: SiReact, name: "React" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGit, name: "Git" },
  { icon: SiLinux, name: "Linux" },
];

const TechMarquee = () => {
  return (
    <section className="w-full py-16 overflow-hidden bg-white/2 border-y border-white/5 relative">
      <div className="relative max-w-[1440px] mx-auto">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-64 bg-linear-to-r from-[#030712] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-64 bg-linear-to-l from-[#030712] to-transparent z-10" />

        <div className="flex w-max gap-12 md:gap-24 animate-scroll px-8">
          {[...techStack, ...techStack, ...techStack].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4 min-w-[80px] md:min-w-[120px] group cursor-default"
              >
                <div className="relative p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all duration-500">
                  <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  <Icon className="text-3xl md:text-5xl text-slate-500 group-hover:text-indigo-400 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6" />
                </div>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 group-hover:text-indigo-300 transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
