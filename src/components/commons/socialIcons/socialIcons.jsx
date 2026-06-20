import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center gap-3">
      <a
        href="https://www.linkedin.com/in/mdlr89/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#1a6fec] transition-colors duration-200"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="h-5 w-5" />
      </a>
      <a
        href="https://github.com/Umario-chan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#1a6fec] transition-colors duration-200"
        aria-label="Github"
      >
        <FaGithub className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialIcons;
