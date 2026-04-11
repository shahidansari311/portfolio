import React from "react";
import {
  SiLeetcode,
  SiHackerrank,
  SiGoogle,
  SiCodechef,
  SiInstagram,
} from "react-icons/si";

const iconMap = {
  LeetCode: <SiLeetcode className="text-yellow-400" />,
  HackerRank: <SiHackerrank className="text-green-500" />,
  "Google Developer": <SiGoogle className="text-blue-500" />,
  CodeChef: <SiCodechef className="text-orange-500" />,
  Instagram: <SiInstagram className="text-pink-500" />,
};

const Profilecard = ({ handle, platform, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card min-w-[240px] p-6 rounded-2xl flex items-center gap-4 transition-all duration-300"
    >
      <div className="text-3xl p-3 bg-white/5 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
        {iconMap[platform]}
      </div>

      <div>
        <h3 className="text-sm font-bold text-white tracking-wide uppercase">{platform}</h3>
        <p className="text-xs text-slate-400 mt-0.5">@{handle}</p>
      </div>
      
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </a>
  );
};

export default Profilecard;
