import React from 'react'
import ProjectCard from '../components/ProjectCard'

const MyProjects = () => {
  const projects = [
    {
      title: 'Scatch – Premium Bag Shop',
      image: '/scath.png',
      desc: "Scatch is a full-stack e-commerce web application designed for selling premium bags with a smooth and secure user experience. Features include user authentication, product listings, image uploads, and admin panel.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Tailwind"],
      liveLink: "https://scatch-8fya.onrender.com/",
      githubLink: "https://github.com/shahidansari311/Scatch"
    },
    {
      title: 'Weather Dashboard',
      image: '/weather.png',
      desc: "A responsive web application providing real-time weather information and 5-day forecasts. Integrates OpenWeather API with a clean, mobile-first interface.",
      tech: ["React", "API Handling", "Tailwind", "JavaScript"],
      liveLink: "https://weather-app-drab-one-53.vercel.app/",
      githubLink: "https://github.com/shahidansari311/Weather-App"
    },
    {
      title: 'Portfolio',
      image: '/portfolio.png',
      desc: "Modern developer portfolio featuring advanced animations, glassmorphism, and responsive design concepts to showcase professional work and skills.",
      tech: ["React", "GSAP", "Tailwind", "Framer"],
      githubLink: "https://github.com/shahidansari311/portfolio"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-0" id="project">
      <div className="flex flex-col items-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold font-sync text-center mb-4">
          FEATURED <span className="text-gradient">PROJECTS</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://github.com/shahidansari311" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all"
        >
          View More Projects on GitHub
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default MyProjects