import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

const MyProjects = () => {
  const projects = [
    {
      title: 'PaisaPilot',
      image: '/PaisaPilot.png', // Fallback or assume it's in public
      desc: "Offline-first personal finance mobile app for tracking income, expenses, budgets, group expense splitting, and a borrow/lend ledger with local SQLite storage.",
      tech: ["React Native", "Expo", "TypeScript", "SQLite", "Zustand"],
      githubLink: "https://github.com/shahidansari311/PaisaPilot"
    },
    {
      title: 'HomeHive',
      image: '/HomeHive.jpeg',
      desc: "A cross-platform mobile app for real estate property listing — browse, search, and list properties, built with Expo and file-based routing.",
      tech: ["React Native", "Expo", "TypeScript", "NativeWind", "Zustand"],
      githubLink: "https://github.com/shahidansari311/HomeHive"
    },
    {
      title: 'Bank Ledger System',
      image: '/bank-ledger.png',
      desc: "RESTful Bank Ledger API with Node.js, Express.js v5, PostgreSQL & MongoDB. OTP email verification, JWT auth, role-based access, GitHub Actions CI/CD, deployed on AWS EC2.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT", "AWS EC2", "GitHub Actions"],
      liveLink: "https://bank-ledger-5t7c.onrender.com/",
      githubLink: "https://github.com/shahidansari311/Bank-ledger"
    },
    {
      title: 'Real-Time Collaborative Code Editor',
      image: '/realcode.png',
      desc: "Google-Docs-style collaborative code editor with real-time sync via Yjs + Socket.io. Dockerized multi-stage builds, deployed on AWS ECS via ECR.",
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
    <section className="section-padding" id="project">
      <div className="content-wrap">
      <div className="flex flex-col items-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold font-sync text-center mb-5 leading-tight">
          FEATURED <span className="text-gradient">PROJECTS</span>
        </h2>
        <div className="w-24 h-1 bg-rose-500 rounded-full"></div>
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

      <div className="mt-14 md:mt-16 text-center">
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
      </div>
    </section>
  )
}

export default MyProjects