import ProjectCard from './ProjectCard';
import PromoAi from '../assets/PromoAi.jpg';
import Vestra from '../assets/Vestra.png';
import Devshaala from '../assets/Devshaala.png';
import Carepredict from '../assets/Carepredict.png';

const Projects = () => (
  <section id="projects" className="w-full max-w-6xl mx-auto mt-8 mb-4 px-2">
    <h2 className="text-3xl md:text-4xl font-bold text-pink-400 flex items-center gap-2 justify-center mb-8">
      Featured Projects <span className="text-pink-300">🌸</span>
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <ProjectCard
        image={PromoAi}
        title="PromoAi"
        subtitle="Your promotion buddy"
        description="Helps you generate promotional posts and automatically sends them to various platforms."
        live="#"
        github="https://github.com/aakanshaa0/PromoAI.git"
      />
      <ProjectCard
        image={Vestra}
        title="Vestra"
        subtitle="E-commerce Website"
        description="A user-friendly e-commerce website for seamless online shopping."
        live="#"
        github="https://github.com/aakanshaa0/ecommerce-website.git"
      />
      <ProjectCard
        image={Devshaala}
        title="DevShaala"
        subtitle="Course Management Platform"
        description="An e-learning platform where instructors can create courses and students can enroll in them."
        live="#"
        github="https://github.com/aakanshaa0/DevShaala.git"
      />
      <ProjectCard
        image={Carepredict}
        title="CarePredict"
        subtitle="CarePredict - Health Risk Analyzer"
        description="A collaborative health platform that predicts risks for diseases like cancer and cardiovascular conditions. It also helps users locate nearby hospitals."
        live="#"
        github="https://github.com/aakanshaa0/healthcare-prediction.git"
      />
    </div>
  </section>
);

export default Projects; 