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
      className="min-w-[220px] p-5 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md hover:scale-105 transition flex flex-col gap-3"
    >
      <div className="text-3xl">{iconMap[platform]}</div>

      <h3 className="text-lg font-semibold">{platform}</h3>

      <p className="text-sm text-white/70">@{handle}</p>
    </a>
  );
};

export default Profilecard;
