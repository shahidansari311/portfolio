import React from 'react'
import {TypeAnimation} from 'react-type-animation';
import SocialLinks from '../components/Sociallinks'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center section-padding pt-32 lg:pt-0 overflow-hidden" id="home">
      <div className="flex-1 text-center lg:text-left z-10 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-pill text-indigo-400 text-xs font-black tracking-[0.2em] uppercase cursor-target">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for New Projects
        </div>
        
        <h1 className="font-sync font-bold mb-4 leading-[1.1] selection:bg-indigo-500">
          CREATIVE <br />
          <span className="text-gradient">DEVELOPER</span>
        </h1>

        <div className="h-16 mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-space font-bold text-slate-500 tracking-tight">
            <TypeAnimation
              sequence={[
                "MERN STACK ARCHITECT",
                2000,
                "UI/UX CRAFTSMAN",
                2000,
                "PROBLEM SOLVER",
                2000  
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h3>
        </div>

        <p className="max-w-xl text-base md:text-lg text-slate-400 mb-12 leading-relaxed mx-auto lg:mx-0 font-medium">
          I'm <span className="text-white font-bold underline decoration-indigo-500/50 underline-offset-4">Shahid Ansari</span>. Computer Science student at ABES Engineering College. 
          I engineer high-performance, scalable digital experiences with precision and passion.
        </p>

        <div className="mb-12 flex justify-center lg:justify-start">
          <SocialLinks size={24} />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
          <button
            onClick={() => window.open("https://drive.google.com/file/d/1FDpIT94LN8apqKe12ALjekjDWQgPz84e/view?usp=sharing", "_blank")}
            className="cursor-target group relative w-full sm:w-auto px-10 py-5 bg-indigo-600 rounded-2xl font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-[1.05] active:scale-95 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.5)] overflow-hidden"
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="cursor-target w-full sm:w-auto px-10 py-5 glass rounded-2xl font-black uppercase tracking-widest text-white border border-white/10 transition-all duration-300 hover:bg-white/5 hover:border-indigo-500/30 hover:scale-[1.05] active:scale-95"
          >
            Hire Me
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end mt-20 lg:mt-0 relative w-full px-4 sm:px-0">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
          {/* Animated Background Orbs */}
          <div className="absolute -inset-10 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute -inset-20 bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-1000"></div>
          
          <div className="cursor-target relative z-10 w-full h-full glass rounded-[40px] p-4 sm:p-6 transform rotate-3 hover:rotate-0 transition-all duration-700 overflow-hidden group border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="avatar.png" 
              alt="Shahid Ansari" 
              className="w-full h-full object-cover rounded-[30px] grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/80 to-transparent"></div>
          </div>

          {/* Decorative Elements */}
          <div className="cursor-target absolute -top-8 -right-8 glass p-6 rounded-3xl animate-float hidden md:block border border-white/10 shadow-2xl z-20" style={{ animationDelay: '2s' }}>
            <div className="text-3xl font-black text-purple-400">24/7</div>
            <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero