import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import { Toaster } from "react-hot-toast";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import MySkills from "./pages/MySkills";
import TechMarquee from "./components/TechMarquee";
import MyProjects from "./pages/MyProjects";
import CodingStats from "./pages/CodingStats";
import Certification from "./pages/Certification";
import Achievements from "./pages/Achievements";

import Contact from "./pages/Contact";
import ScrollBackground from "./components/ScrollBackground";
import LetterField from "./components/LetterField";
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
    <div className="relative min-h-screen w-full bg-[#050e10] selection:bg-rose-500/30 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-linear-to-r from-rose-500 via-red-500 to-pink-400 z-[200] transition-all duration-75 shadow-[0_0_10px_rgba(244,63,94,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Scroll-driven dynamic background */}
      <ScrollBackground />

      {/* Full-page interactive letter field — name & stack emerge near the cursor */}
      <div className="fixed inset-0 z-[2] pointer-events-none" aria-hidden="true">
        <LetterField className="opacity-40 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full overflow-x-hidden">
        <Toaster position="top-right" />
        <Navbar/>
        <SocialSidebar />
        <EmailSidebar />
        <BackToTop />
        <main className="overflow-x-hidden">
          <Hero/>
          <AboutMe/>
          <Experience/>
          <MySkills/>
          <TechMarquee />
          <MyProjects/>
          <CodingStats/>
          <Achievements/>
          <Certification/>

          <Contact/>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
