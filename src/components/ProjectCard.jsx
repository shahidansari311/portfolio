import React from "react";

const ProjectCard = ({ title, image, tech = [], desc }) => {
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
      {/* Image */}
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

      {/* Content */}
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        {/* Tech stack */}
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

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
