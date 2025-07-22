import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1b1e36] border-t border-[#393053] py-4">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-row gap-4 items-center">
          <span className="text-lg font-semibold text-white">Connect with me:</span>
          <a href="https://github.com/aakanshaa0" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-white transition text-2xl"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/aakansha-pande-666ba6285" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-white transition text-2xl"><GrLinkedin /></a>
          <a href="https://mail.google.com/mail/u/4/#inbox" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-white transition text-2xl"><FiMail /></a>
        </div>
        <div className="flex flex-row items-center gap-2 text-lg font-semibold text-white">
          <span>Made with</span>
          <FaHeart className="text-pink-400 animate-pulse" />
          <span>by Aakansha</span>
        </div>
    </div>
    </footer>
  )
}

export default Footer