import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

const MyProjects = () => {
  const projects = [
    {
      title: 'Bank Ledger System',
      image: '/bank-ledger.png',
      desc: "Production-ready RESTful Bank Ledger API built with Node.js and Express.js v5, PostgreSQL and MongoDB. Features OTP-based email verification via Nodemailer, JWT & bcrypt authentication, role-based access control, CI/CD pipeline using GitHub Actions, and deployed on AWS EC2.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT", "AWS EC2", "GitHub Actions"],
      liveLink: "https://bank-ledger-5t7c.onrender.com/",
      githubLink: "https://github.com/shahidansari311/Bank-ledger"
    },
    {
      title: 'Real-Time Collaborative Code Editor',
      image: '/realcode.png',
      desc: "Production-grade collaborative code editor similar to Google Docs for code. Join rooms and edit code simultaneously with real-time sync powered by Yjs and WebSockets (Socket.io). Containerized with Docker multi-stage builds and deployed on AWS ECS via ECR for scalable cloud hosting.",
      tech: ["React.js", "Node.js", "Socket.io", "Yjs", "Docker", "AWS ECS"],
      githubLink: "https://github.com/shahidansari311/RealCode"
    },
    {
      title: 'SocialBazar – Social Media Marketplace',
      image: '/socialbazar.png',
      desc: "Full-stack social commerce platform where users can post product listings, follow each other, interact via likes/comments, and complete peer-to-peer transactions. Built with relational PostgreSQL schema, scalable RESTful APIs with layered middleware, JWT authentication, and Zustand for global state.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Zustand", "JWT"],
      liveLink: "https://socialbazar.vercel.app/",
      githubLink: "https://github.com/shahidansari311/Social_media_marketplace"
    },
    {
      title: 'Scatch – E-Commerce Platform',
      image: '/scath.png',
      desc: "End-to-end e-commerce web app with full merchant flow: user registration, product browsing, cart management, and order placement. Features a rich admin dashboard with product creation, image uploads (Multer), inventory control, and order tracking following MVC architecture.",
      tech: ["Node.js", "Express.js", "MongoDB", "Multer", "EJS", "JWT"],
      liveLink: "https://scatch-8fya.onrender.com/",
      githubLink: "https://github.com/shahidansari311/Scatch"
    },
    {
      title: 'Portfolio',
      image: '/portfolio.png',
      desc: "Modern developer portfolio featuring advanced animations, glassmorphism, 3D effects, and responsive design to showcase professional work, skills, and achievements.",
      tech: ["React", "GSAP", "Tailwind", "Framer Motion", "Three.js"],
      githubLink: "https://github.com/shahidansari311/portfolio"
    }
  ];

  return (
    <section className="py-24 px-5 sm:px-8 lg:px-0" id="project">
      <div className="flex flex-col items-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold font-sync text-center mb-4">
          FEATURED <span className="text-gradient">PROJECTS</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>

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