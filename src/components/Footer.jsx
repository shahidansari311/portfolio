import React from 'react'
import SocialLinks from './Sociallinks'

const Footer = () => {
  return (
    <footer className="w-full bg-[#030712] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <div className="font-sync font-bold text-2xl md:text-3xl tracking-tighter text-white">
              SHAHID <span className="text-indigo-500">_</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed font-medium">
              Architecting the future of the web with precision, passion, and performance. Let's create something extraordinary.
            </p>
            <div className="flex items-center gap-4">
              <SocialLinks size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Navigation</h4>
            <ul className="grid grid-cols-2 gap-4">
              {['Home', 'About', 'Skills', 'Projects', 'Profiles', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-800 transition-all group-hover:bg-indigo-500 group-hover:scale-150"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snippet */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Contact</h4>
            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-300">Ghaziabad, Uttar Pradesh, India</p>
              <a href="mailto:shahidansari945256@gmail.com" className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors block">
                shahidansari945256@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">
            © {new Date().getFullYear()} Shahid Ansari. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-indigo-400 transition-all">Privacy Policy</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-indigo-400 transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;