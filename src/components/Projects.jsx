import { useState } from 'react';
import ProjectCard from './ProjectCard';
import Vestra from '../assets/Vestra.png';
import FitnessTrainer from '../assets/FitnessTrainer.png';
import LegalLens from '../assets/LegalLens.png';
import Medicare from '../assets/Medicare.png';
import Devshaala from '../assets/Devshaala.png';
import PromoAi from '../assets/PromoAi.jpg';
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
          image={FitnessTrainer}
          title="FitAI"
          subtitle="AI Fitness Trainer"
          description="AI-powered fitness application that generates personalized workout plans and diet recommendations based on individual fitness goals, body metrics, and preferences."
          live="https://fitaii.vercel.app/"
          github="https://github.com/aakanshaa0/FitnessTrainer"
        />
        <ProjectCard
          image={Medicare}
          title="Medicare"
          subtitle="Hospital Management System"
          description="Comprehensive hospital management platform built with Java Spring Boot, React, and PostgreSQL. Features JWT authentication, OAuth2 login, and RBAC for Admin, Doctor, and Patient workflows."
          live="#"
          github="https://github.com/aakanshaa0/Medicare"
        />
        {showAll && (
          <>
            <ProjectCard
              image={Vestra}
              title="Vestra"
              subtitle="E-commerce Platform"
              description="Full-featured e-commerce web application built with MERN stack. Includes Stripe payment gateway integration, Cloudinary for media management, JWT authentication, and Docker containerization for seamless deployment."
              live="https://vestraa.vercel.app"
              github="https://github.com/aakanshaa0/ecommerce-website.git"
            />
            <ProjectCard
              image={LegalLens}
              title="LegalLens"
              subtitle="Document Analysis Platform"
              description="Document intelligence platform using React, TypeScript, and Node.js. Supports PDF, DOCX, TXT, CSV, and JSON with multi-document summarization and context-aware Q&A powered by LangChain and Google Gemini."
              live="#"
              github="https://github.com/aakanshaa0/LegalLens"
            />
            <ProjectCard
              image={PromoAi}
              title="PromoAI"
              subtitle="AI Content Generator"
              description="AI-driven promotional content generator that creates engaging marketing posts and social media content for various platforms using natural language processing and generative AI models."
              live="https://promoaii.vercel.app/"
              github="https://github.com/aakanshaa0/PromoAI"
            />
            <ProjectCard
              image={Devshaala}
              title="DevShaala"
              subtitle="Course Management Platform"
              description="Online learning management system where instructors can create and publish courses, and students can enroll, track progress, and access educational content with an interactive dashboard."
              live="#"
              github="https://github.com/aakanshaa0/DevShaala"
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