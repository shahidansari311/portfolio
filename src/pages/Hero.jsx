import React from 'react'

const Hero = () => {
  return (
    <div className='main p-6 flex justify-between self-center mt-18'>
        <div className="left ml-10 ">
            <h1 className='text-5xl font-bold drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition'>Hi , I'm Shahid</h1>
            <br />
            <h3 className='text-2xl'>WEB DEVELOPER</h3>
            <h5>Computer Science student at ABES Engineering College.
                <br />
            I build scalable full-stack applications using React, Node.js, and Express.</h5>
            <button className='mt-3 pl-3 pr-3 pt-2 pb-2 rounded-[20px] bg-blue-700 font-bold text-md hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition'> Download CV </button>
        </div>
        <div className="right mr-20">
            <img src="avatar.png" alt="" className='avatar mt-[-100px] h-[300px] drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]'/>
        </div>
    </div>
  )
}

export default Hero