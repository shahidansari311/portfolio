import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks = ({size,p}) => {
  return (
    <ul className="flex gap-2">
      <li className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
        <a href="https://github.com/shahidansari311" target="_blank">
          <FaGithub size={size} />
        </a>
      </li>

      <li className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
        <a href="https://www.linkedin.com/in/shahidansari-/" target="_blank">
          <FaLinkedin size={size} />
        </a>
      </li>

      <li className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
        <a href="https://x.com/Shahid_310_" target="_blank">
          <FaTwitter size={size} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
