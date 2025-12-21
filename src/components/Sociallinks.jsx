import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks = ({size,p}) => {
  return (
    <ul className="flex gap-2">
      <li className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
        <a href="https://github.com/yourusername" target="_blank">
          <FaGithub size={size} />
        </a>
      </li>

      <li className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
        <a href="https://linkedin.com/in/yourusername" target="_blank">
          <FaLinkedin size={size} />
        </a>
      </li>

      <li className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
        <a href="https://twitter.com/yourusername" target="_blank">
          <FaTwitter size={size} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
