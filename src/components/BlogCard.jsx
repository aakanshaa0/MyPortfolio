import { FiExternalLink } from 'react-icons/fi';

const BlogCard = ({ image, title, description, link }) => (
  <div className="bg-[#1b1e36] rounded-xl border-2 border-[#393053] shadow-lg hover:border-pink-500/50 hover:shadow-pink-500/10 transition-all duration-300 overflow-hidden flex flex-col h-full">
    <div className="w-full h-64 bg-gray-900 flex items-center justify-center overflow-hidden">
      <img src={image} alt={title} className="object-cover w-full h-full" />
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-200 mb-3 flex-1 text-base leading-relaxed">{description}</p>
      <div className="flex gap-3 mt-auto justify-end">
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2 border-2 border-pink-400 text-pink-300 font-semibold rounded-lg hover:bg-pink-400 hover:text-white transition">
          Read More <FiExternalLink className="text-lg" />
        </a>
      </div>
    </div>
  </div>
);

export default BlogCard; 