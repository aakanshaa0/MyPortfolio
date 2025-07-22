import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ image, title, subtitle, description, tech, live, github }) => (
  <div className="bg-[#1b1e36] rounded-xl border-2 border-[#393053] shadow-lg overflow-hidden flex flex-col h-full">
    <div className="w-full h-64 bg-gray-900 flex items-center justify-center overflow-hidden">
      <img src={image} alt={title} className="object-cover w-full h-full" />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      <p className="text-pink-400 font-semibold mb-2">{subtitle}</p>
      <p className="text-gray-200 mb-4 flex-1">{description}</p>
      <div className="flex gap-4 mt-auto justify-end">
        <a href={live} target="_blank" rel="noopener noreferrer" title="Live Demo"
          className="flex items-center gap-2 px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition">
          <FiExternalLink className="text-xl" />
          <span>Live Link</span>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub"
          className="flex items-center gap-2 px-6 py-2 border-2 border-white text-white font-semibold rounded-lg transition hover:bg-[#23234b]">
          <FiGithub className="text-xl" />
          <span>Repo Link</span>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard; 