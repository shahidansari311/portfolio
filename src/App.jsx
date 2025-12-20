import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#05010d]">
      <Background/>
      <div className="relative z-10 text-white">
        <Navbar/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
