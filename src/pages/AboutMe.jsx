import React from 'react'

const AboutMe = () => {
  return (
    <section className="w-full">
      <h2 className='title text-3xl font-bold place-self-center mt-10 underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]'>
        About Me
      </h2>
       <div className="max-w-5xl mx-auto mt-10 px-6">
        <div className="flex justify-between items-center gap-20 flex-wrap">
          <div>
            <img
              src="myimg.jpeg"
              alt="Shahid Ansari"
              className="h-[260px] w-[300px] rounded-full object-cover drop-shadow-[0_0_8px_rgba(60,189,248,1.5)]"
            />
          </div>

          <div className="max-w-xl space-y-4 text-gray-300">
            <p>
              I’m Shahid Ansari, a Computer Science student at ABES Engineering College with a strong interest in full-stack web development.
            </p>
            <p>
              I enjoy building real-world applications using React, Node.js, and Express, focusing on clean code, responsive design, and performance.
            </p>
            <p>
              Alongside development, I actively practice problem-solving and continuously improve my technical skills through projects and hands-on learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe