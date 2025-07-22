const SkillCard = ({ name, type }) => (
  <div className="bg-[#1b1e36] border-2 border-[#393053] rounded-lg p-4 flex flex-col items-center justify-center text-center min-h-[70px]">
    <span className="text-white font-semibold text-lg">{name}</span>
    <span className="text-pink-300 text-xs mt-1">{type}</span>
  </div>
);

export default SkillCard; 