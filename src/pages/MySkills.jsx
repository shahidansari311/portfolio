import React from 'react'
import Card from '../components/Card'
import { HiCode, HiDesktopComputer, HiServer, HiLightningBolt } from 'react-icons/hi'

const MySkills = () => {
  const skills = [
    { name: "Programming", icon: <HiCode />, skills: ["JavaScript", "Python", "Java", "C++"] },
    { name: "Frontend", icon: <HiDesktopComputer />, skills: ["React.js", "Next.js", "Tailwind CSS", "Redux"] },
    { name: "Backend", icon: <HiServer />, skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"] },
    { name: "Tools", icon: <HiLightningBolt />, skills: ["Docker", "Git/GitHub", "AWS", "Linux"] },
  ];

  return (
    <section className="section-padding py-24" id="skills">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-4 uppercase leading-tight">
          TECHNICAL <span className="text-gradient">STACK</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {skills.map((category, index) => (
          <div key={index} className="cursor-target glass-card p-8 rounded-[32px] group">
            <div className="mb-6 p-4 w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 text-3xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="cursor-target px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MySkills
