import React ,{useState} from 'react'
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className='main p-5 flex justify-around'>
        <div className="font-bold text-2xl tracking-wide text-white drop-shadow-[0_0_8px_rgba(56,189,248,1.3)] cursor-pointer">
            Shahid &lt;/&gt;
        </div>
        <div className="hidden md:flex drop-shadow-[0_0_2px_rgba(56,189,248,1.5)]">
            <ul className='flex gap-5'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>

         <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
    </div>

    {open && (
        <div className="md:hidden px-5 pb-5">
          <ul className="flex flex-col gap-4 bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10">
            <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
            <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
      )}

    <hr className='text-gray-800 ml-10 mr-10'/>
    </>
  )
}

export default Navbar