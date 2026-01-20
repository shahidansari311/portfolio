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

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden absolute inset-0 -z-10 h-full items-center [background:radial-gradient(185%_185%_at_50%_10%,#000_40%,#63e_100%)]">
      <TargetCursor />
      <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles 
             particleColors={['#ffffff', '#ffffff']}
             particleCount={200}
             particleSpread={10}
             speed={0.1}
             particleBaseSize={100}
             moveParticlesOnHover={true}
             alphaParticles={false}
             disableRotation={false}
          />
      </div>
      <div className="relative z-10 text-white">
        <Toaster position="top-center" />
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <MySkills/>
        <TechMarquee />
        <MyProjects/>
        <Otherprofiles/>
        <Certification/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
