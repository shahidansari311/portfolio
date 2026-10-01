import React from 'react'
import Timeline from '../components/Timeline'

const AboutMe = () => {
  return (
    <section className="section-padding" id="about">
      <div className="content-wrap">
      <div className="flex flex-col items-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-5 leading-tight">
          ARCHITECTING <br className="md:hidden" /> <span className="text-gradient">DIGITAL</span> SOLUTIONS
        </h2>
        <div className="w-24 h-1 bg-rose-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
          <div className="glass-card p-8 md:p-10 rounded-[40px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl group-hover:bg-rose-500/20 transition-all"></div>
            
            <div className="space-y-6 relative z-10">
              <p className="text-base md:text-lg text-slate-300 leading-loose">
                I'm <span className="text-rose-400 font-bold tracking-wide">Shahid Ansari</span>, a Full-Stack & Mobile Developer and 3rd-year Computer Science student at ABES Engineering College. I build production-ready applications end to end — from database design and REST APIs to polished, responsive interfaces. As a freelance developer for <span className="text-white font-semibold">Silver Real Estate</span>, I shipped a <span className="text-white font-semibold">complete property platform</span> spanning web, mobile, an admin dashboard, and cloud deployment.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-loose font-medium">
                My core expertise spans the <span className="text-red-400 font-bold tracking-wide">PERN, MERN & React Native stacks</span>. I'm a <span className="text-green-400 font-bold">GSSoC '26 Open Source Contributor</span>, a <span className="text-yellow-400 font-bold">National Hackathon Runner-Up</span> (SAH 2.0), and <span className="text-orange-400 font-bold">AWS</span> Cloud certified. Right now I'm deep into LLM-powered features, AI-driven app logic, and mobile development.
              </p>
              
              <div className="pt-8 border-t border-white/5">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-6">Education & Growth</h4>
                <Timeline />
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {['MERN Stack', 'PERN Stack', 'React Native', 'Cloud & DevOps', 'Full Stack', 'Open Source'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider bg-white/5 text-slate-400 border border-white/5 hover:border-rose-500/30 hover:text-rose-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative group max-w-lg mx-auto lg:ml-auto">
            <div className="absolute -inset-4 bg-linear-to-r from-rose-500 to-red-600 rounded-[50px] blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-1000"></div>
            <div className="relative glass p-4 sm:p-6 rounded-[50px] overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:rotate-1">
              <img
                src="p.png"
                alt="Shahid Ansari"
                className="w-full aspect-[4/5] object-cover rounded-[40px] grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutMe