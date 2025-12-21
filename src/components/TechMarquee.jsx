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
//   SiAmazonaws,
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
//   { icon: SiAmazonaws, name: "AWS" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGit, name: "Git" },
  { icon: SiLinux, name: "Linux" },
];

const TechMarquee = () => {
  return (
    <section className="w-full mt-24 overflow-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex w-max gap-14 animate-marquee">
          {[...techStack, ...techStack].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="
                  flex flex-col items-center gap-2
                  min-w-[90px]
                  text-gray-400
                  transition
                  hover:text-cyan-400
                "
              >
                <Icon className="text-4xl drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                <span className="text-xs tracking-wide">
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
