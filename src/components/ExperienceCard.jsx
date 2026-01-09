import { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

const ExperienceCard = ({ title, company, logo, duration, location, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative bg-[#1b1e36] rounded-xl border-2 border-[#393053] shadow-lg w-full overflow-hidden">
      <div className="absolute left-6 top-8 w-3 h-3 bg-pink-400 rounded-full border-4 border-[#1b1e36] z-10"></div>
      <div className="absolute left-[29px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-pink-400/50 to-transparent"></div>
      
      <div className="relative pl-20 pr-4 md:pr-16 py-4 md:py-6">
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex flex-col md:flex-row md:items-start md:justify-between mb-0 md:mb-5 cursor-pointer md:cursor-default"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt={company} className="w-10 h-10 object-contain" />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold text-white">{company}</h4>
                <h3 className="text-lg font-bold text-pink-400">{title}</h3>
              </div>
            </div>
          </div>
          <div className="mt-3 md:mt-0 flex items-center justify-between md:justify-start">
            <div className="flex items-center gap-2 text-pink-300 px-3 py-1.5 text-base">
              <span className="font-medium">{duration}</span>
            </div>
            <div className="md:hidden">
              {isExpanded ? (
                <MdOutlineKeyboardDoubleArrowUp className="text-pink-400 text-lg" />
              ) : (
                <MdOutlineKeyboardDoubleArrowDown className="text-pink-400 text-lg" />
              )}
            </div>
          </div>
        </div>

        <div className={`pt-5 md:block ${isExpanded ? 'block' : 'hidden'}`}>
          <ul className="space-y-3 ml-8">
            {description.map((item, index) => (
              <li key={index} className="text-white text-sm leading-relaxed flex items-start">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-pink-400/60 mt-2 mr-3"></div>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;