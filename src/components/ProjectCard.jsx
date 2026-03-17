import React from "react";

const ProjectCard = ({ title, image, tech = [], desc, liveLink, githubLink }) => {
  return (
    <div className="cursor-target glass-card rounded-[28px] overflow-hidden flex flex-col h-full group hover:bg-white/3">
      {/* Image */}
      <div className="relative overflow-hidden h-48 sm:h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-transparent to-transparent opacity-70"></div>

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target absolute top-3 right-3 p-2.5 bg-white/10 backdrop-blur-xl rounded-xl text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 hover:scale-110 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tech.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-[9px] font-black uppercase tracking-widest rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/10"
            >
              {item}
            </span>
          ))}
          {tech.length > 3 && (
            <span className="px-2 py-1 text-[9px] font-black uppercase tracking-widest rounded-lg bg-slate-800 text-slate-400">
              +{tech.length - 3}
            </span>
          )}
        </div>

        <h3 className="cursor-target text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors leading-tight">
          {title}
        </h3>

        <p className="text-slate-400 text-sm mb-5 line-clamp-2 leading-relaxed flex-1">
          {desc}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/5 transition-all active:scale-95"
            >
              Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-indigo-600 text-[10px] font-black uppercase tracking-widest text-white hover:bg-indigo-700 transition-all shadow-[0_4px_20px_rgba(99,102,241,0.3)] active:scale-95"
            >
              Launch
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
