import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import MySkills from "./pages/MySkills";
import TechMarquee from "./components/TechMarquee";
import MyProjects from "./pages/MyProjects";
import Otherprofiles from "./pages/Otherprofiles";
import Certification from "./pages/Certification";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#05010d]">
      <Background/>
      <div className="relative z-10 text-white">
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
