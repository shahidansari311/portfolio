import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialSidebar = () => {
  const socials = [
    { icon: FaGithub, href: "https://github.com/shahidansari310", color: "hover:text-white" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/shahidansari-/", color: "hover:text-blue-400" },
    { icon: FaTwitter, href: "https://x.com/Shahid_310_", color: "hover:text-cyan-400" },
    { icon: FaInstagram, href: "https://www.instagram.com/_shahid_129_/", color: "hover:text-pink-400" },
  ];

  return (
    <div className="fixed left-6 bottom-0 z-50 hidden xl:flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-target text-slate-500 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
          >
            <Icon size={22} />
          </a>
        );
      })}
      <div className="w-[1px] h-32 bg-linear-to-t from-transparent via-slate-700 to-slate-700 mt-2"></div>
    </div>
  );
};

export default SocialSidebar;
