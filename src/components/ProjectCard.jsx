import React from "react";

const ProjectCard = ({ title, image, tech = [], desc ,liveLink,
  githubLink,}) => {
  return (
    <div
      className="
        group
        relative
        w-full
        max-w-md
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-md
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-red-500/30
      "
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="
            h-44 w-full
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        <ul className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <li
              key={index}
              className="
                px-3 py-1
                text-xs font-medium
                rounded-full
                bg-red-500/15
                text-red-300
                border border-red-500/20
              "
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-300 leading-relaxed">
          {desc}
        </p>
        <div className="mt-4 flex gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 text-center
                px-4 py-2 rounded-xl
                text-sm font-semibold
                bg-gradient-to-r from-red-500 to-pink-600
                text-white
                transition hover:opacity-90
              "
            >
              Live Demo
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex-1 text-center
                px-4 py-2 rounded-xl
                text-sm font-semibold
                border border-white/20
                text-white
                transition hover:bg-white/10
              "
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
