import React from 'react'
import ProjectCard from '../components/ProjectCard'

const MyProjects = () => {
  return (
    <section className="w-full mt-30">
      <h2 className='title text-3xl font-bold place-self-center mt-10 underline underline-offset-8 decoration-blue-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]'>
        My Projects
      </h2>
      <div className="projects grid grid-cols-1 md:grid-cols-3 gap-8 mx-5 mt-5">
        <ProjectCard title='Scatch – Premium Bag Shop' image='/image.png' desc="Scatch is a full-stack e-commerce web application designed for selling premium bags with a smooth and secure user experience. The platform includes user authentication, product listings, image uploads, shopping cart functionality, and an admin panel for managing products. The project focuses on clean backend architecture, secure authentication, and a modern UI design." tech={["Node.js", "Express.js","EJS", "Tailwind CSS","MongoDB","JWT", "bcrypt","multer"]} />

        <ProjectCard title='Weather Dashboard' image='/image.png' desc="The Weather Dashboard is a responsive web application that provides real-time weather information and forecasts based on user location or searched cities. It integrates external APIs to fetch live weather data and displays it in a clean, mobile-first interface. The project emphasizes API handling, state management, and responsive UI design " tech={["React","React.js", "HTML5", "CSS3","OpenWeather API","JavaScript"]} />

        <ProjectCard title='Personal Portfolio Website' image='/image.png' desc="This is my personal developer portfolio built to showcase my skills, projects, and experience in a visually appealing and interactive way. The website features modern UI animations, gradient backgrounds, responsive layouts, and reusable components. It reflects my design sense, frontend skills, and attention to detail while serving as a central hub for my work and online presence." tech={["React","Tailwind CSS"]} />
      </div>  
    </section>
  )
}

export default MyProjects