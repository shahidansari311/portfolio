import React from 'react'
import SocialLinks from '../components/Sociallinks'

const Hero = () => {
  return (
    <div className='main p-6 flex justify-between self-center mt-8 ' id='home'>
        <div className="left md:ml-10  ">
            <h1 className='text-5xl font-bold drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition'>Hi , I'm Shahid</h1>
            <br />
            <h3 className='text-2xl'>WEB DEVELOPER</h3>
            <h5>Computer Science student at ABES Engineering College.
                <br />
            I build scalable full-stack applications using React, Node.js, and Express.</h5>
            <div className='mt-2'><SocialLinks size={22}/></div>
             <button
          onClick={() => window.open("https://drive.google.com/file/d/1FDpIT94LN8apqKe12ALjekjDWQgPz84e/view?usp=sharing", "_blank")}
          className="
          mt-3 mr-3
            px-5 py-2
            rounded-2xl
            bg-blue-600
            text-white font-semibold
            transition-all duration-300
            drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]
            hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]
            hover:scale-105
          "
        >
          Download CV
        </button>

        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="
            px-5 py-2
            rounded-2xl
            border border-blue-500
            text-blue-400 font-semibold
            transition-all duration-300
            hover:bg-blue-500/10
            hover:scale-105
          "
        >
          Hire Me
        </button>
        </div>
        <div className="right mr-20 hidden md:flex">
            <img src="avatar.png" alt="" className='avatar mt-[-100px] h-[300px] drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]'/>
        </div>
    </div>
  )
}

export default Hero