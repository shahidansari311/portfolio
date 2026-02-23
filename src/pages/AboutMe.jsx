import React from 'react'
import Timeline from '../components/Timeline'

const AboutMe = () => {
  return (
    <section className="section-padding py-24" id="about">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-4 leading-tight">
          ARCHITECTING <br className="md:hidden" /> <span className="text-gradient">DIGITAL</span> SOLUTIONS
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
          <div className="glass-card p-8 md:p-10 rounded-[40px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
            
            <div className="space-y-6 relative z-10">
              <p className="text-base md:text-lg text-slate-300 leading-loose">
                I'm <span className="text-indigo-400 font-bold tracking-wide">Shahid Ansari</span>, a visionary Computer Science student at ABES Engineering College. My journey is defined by a relentless pursuit of engineering excellence in the digital realm.
              </p>
              <p className="text-base md:text-lg text-slate-300 leading-loose font-medium">
                My core expertise lies in the <span className="text-purple-400 font-bold tracking-wide">MERN Stack</span>, where I transform sophisticated architectural concepts into robust, performant web applications that push the boundaries of what's possible.
              </p>
              
              <div className="pt-8 border-t border-white/5">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-500 mb-6">Education & Growth</h4>
                <Timeline />
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {['MERN Stack', 'System Architecture', 'UI/UX Design', 'Full Stack'].map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider bg-white/5 text-slate-400 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative group max-w-lg mx-auto lg:ml-auto">
            <div className="absolute -inset-4 bg-linear-to-r from-indigo-500 to-purple-600 rounded-[50px] blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-1000"></div>
            <div className="relative glass p-4 sm:p-6 rounded-[50px] overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:rotate-1">
              <img
                src="myimg.jpeg"
                alt="Shahid Ansari"
                className="w-full aspect-[4/5] object-cover rounded-[40px] grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#030712] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe