import React ,{useState} from 'react'
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#project' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] px-4 md:px-8 pointer-events-none">
      <div className="max-w-5xl mx-auto glass-pill px-6 py-3 flex items-center justify-between pointer-events-auto">
        <div className="font-sync font-bold text-lg md:text-xl tracking-tighter text-white cursor-pointer group flex items-center gap-2 cursor-target">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-sm group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(79,70,229,0.5)]">S</div>
          <span className="group-hover:text-indigo-400 transition-colors hidden sm:inline">SHAHID</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="cursor-target text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all relative group py-2"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-2xl text-white glass rounded-xl cursor-target active:scale-90 transition-transform"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`
        md:hidden absolute top-20 left-4 right-4 transition-all duration-500 ease-in-out pointer-events-auto
        ${open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}
      `}>
        <ul className="flex flex-col gap-2 glass p-4 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-indigo-500/5 blur-3xl -z-10"></div>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                onClick={() => setOpen(false)} 
                href={link.href}
                className="cursor-target flex items-center justify-between px-6 py-4 rounded-2xl hover:bg-white/5 transition-all text-slate-300 hover:text-white font-black text-xs uppercase tracking-widest"
              >
                {link.name}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar