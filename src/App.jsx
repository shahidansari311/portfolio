import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import { Toaster } from "react-hot-toast";
import AboutMe from "./pages/AboutMe";
import MySkills from "./pages/MySkills";
import TechMarquee from "./components/TechMarquee";
import MyProjects from "./pages/MyProjects";
import Otherprofiles from "./pages/Otherprofiles";
import Certification from "./pages/Certification";

import Contact from "./pages/Contact";
import Particles from "./components/Background";
import TargetCursor from "./components/SplashCursor";
import SocialSidebar from "./components/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";
import BackToTop from "./components/BackToTop";

const App = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#030712] selection:bg-indigo-500/30 overflow-x-hidden cursor-none">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-linear-to-r from-indigo-500 via-purple-500 to-cyan-400 z-[200] transition-all duration-75 shadow-[0_0_10px_rgba(99,102,241,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Dynamic Background Layer */}
      <div className="fixed inset-0 z-0">
        <div className="glow-mesh"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Ambient Glow Orbs */}
        <div className="glow-orb w-[600px] h-[600px] -top-32 -left-32 opacity-10" style={{ animationDelay: '0s' }}></div>
        <div className="glow-orb w-[700px] h-[700px] top-1/2 -right-32 opacity-10" style={{ animationDelay: '2s' }}></div>
        <div className="glow-orb w-[500px] h-[500px] -bottom-32 left-1/4 opacity-10" style={{ animationDelay: '4s' }}></div>
      </div>

      <TargetCursor />
      
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-30">
          <Particles 
             particleColors={['#6366f1', '#a855f7', '#22d3ee']}
             particleCount={100}
             particleSpread={8}
             speed={0.1}
             particleBaseSize={80}
             moveParticlesOnHover={true}
             alphaParticles={true}
             disableRotation={false}
          />
      </div>

      <div className="relative z-10 w-full overflow-x-hidden">
        <Toaster position="top-right" />
        <Navbar/>
        <SocialSidebar />
        <EmailSidebar />
        <BackToTop />
        <main className="max-w-[1440px] mx-auto overflow-hidden">
          <Hero/>
          <AboutMe/>
          <MySkills/>
          <TechMarquee />
          <MyProjects/>
          <Otherprofiles/>
          <Certification/>

          <Contact/>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
