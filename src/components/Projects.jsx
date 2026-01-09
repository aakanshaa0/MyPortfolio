import { useState } from 'react';
import ProjectCard from './ProjectCard';
import PromoAi from '../assets/PromoAi.jpg';
import Vestra from '../assets/Vestra.png';
import Devshaala from '../assets/Devshaala.png';
import FitnesssTrainer from '../assets/FitnessTrainer.png';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto mt-8 mb-4 px-2">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-400 flex items-center gap-2 justify-center mb-8">
        Featured Projects <span className="text-pink-300">🌸</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          image={FitnesssTrainer}
          title="FitnessTrainer"
          subtitle="AI Fitness Trainer"
          description="An AI-powered fitness app that generates personalized workout and diet plans based on user goals and preferences."
          live="https://fitaii.vercel.app"
          github="https://github.com/aakanshaa0/FitnessTrainer.git"
        />
        <ProjectCard
          image={Vestra}
          title="Vestra"
          subtitle="E-commerce Website"
          description="A user-friendly e-commerce website for seamless online shopping."
          live="https://vestraa.vercel.app"
          github="https://github.com/aakanshaa0/ecommerce-website.git"
        />
        {showAll && (
          <>
            <ProjectCard
              image={PromoAi}
              title="PromoAI"
              subtitle="Your promotion buddy"
              description="Helps you generate promotional posts for various platforms using AI."
              live="#"
              github="https://github.com/aakanshaa0/PromoAI.git"
            />
            <ProjectCard
              image={Devshaala}
              title="DevShaala"
              subtitle="Course Management Platform"
              description="An e-learning platform where instructors can create courses and students can enroll in them."
              live="#"
              github="https://github.com/aakanshaa0/DevShaala.git"
            />
          </>
        )}
      </div>
      <div className="flex justify-center mt-8">
        {showAll ? (
          <a
            href="https://github.com/aakanshaa0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition cursor-pointer"
          >
            <span>See More on GitHub</span>
            <FiExternalLink />
          </a>
        ) : (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition cursor-pointer"
          >
            <span>See More</span>
            <FiChevronDown />
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects; 