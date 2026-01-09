import ExperienceCard from './ExperienceCard';
import companyLogo from '../assets/company-logo.png';

const Experience = () => (
  <section id="experience" className="w-full max-w-6xl mx-auto mt-16 mb-4 px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-pink-400 flex items-center gap-2 justify-center mb-12">
      Work Experience <span className="text-pink-300">🌸</span>
    </h2>
    <div className="flex justify-center">
      <div className="w-full">
      <ExperienceCard
          title="Full Stack Developer Intern"
          company="Hakxcore.io"
          logo={companyLogo}
          duration="June 2025 - September 2025"
          location="Remote"
          description={[
            "Developed and deployed a scalable full-stack LMS with an interactive dashboard, user progress tracking, and personalized learning paths using React, Node.js, and MongoDB.",
            "Engineered a dynamic blog platform using Strapi CMS and Next.js + TypeScript, improving content workflow efficiency.",
            "Enhanced the Hakxcore website by implementing optimized UI components, increasing responsiveness and page load performance.",
            "Applied software engineering best practices including version control, code reviews, performance optimization, and secure API development."
          ]}
        />
      </div>
    </div>
  </section>
);

export default Experience;