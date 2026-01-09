import SkillCard from './SkillCard';

const Skills = () => (
  <section id="skills" className="w-full max-w-7xl mx-auto mt-16 mb-4 px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-pink-400 flex items-center gap-2 justify-center mb-8">
      Technical Skills <span className="text-pink-300">🌸</span>
    </h2>
    <div className="overflow-hidden">
      <div className="flex flex-row gap-4 pb-4 animate-scroll">
        <SkillCard name="React" type="Frontend" />
        <SkillCard name="Next.js" type="Frontend" />
        <SkillCard name="TailwindCSS" type="Frontend" />
        <SkillCard name="Node.js" type="Backend" />
        <SkillCard name="Express" type="Backend" />
        <SkillCard name="WebSockets" type="Backend" />
        <SkillCard name="TypeScript" type="Programming Language" />
        <SkillCard name="JavaScript" type="Programming Language" />
        <SkillCard name="MongoDB" type="Database" />
        <SkillCard name="PostgreSQL" type="Database" />
        <SkillCard name="MySQL" type="Database" />
        <SkillCard name="Prisma" type="ORM" />
        <SkillCard name="Strapi" type="CMS" />
        <SkillCard name="AWS" type="Cloud" />
        <SkillCard name="Terraform" type="DevOps" />
        <SkillCard name="Shell Scripting" type="DevOps" />
        <SkillCard name="Linux" type="DevOps" />
        <SkillCard name="Git" type="Tools" />
        <SkillCard name="React" type="Frontend" />
        <SkillCard name="Next.js" type="Frontend" />
        <SkillCard name="TailwindCSS" type="Frontend" />
        <SkillCard name="Node.js" type="Backend" />
        <SkillCard name="Express" type="Backend" />
        <SkillCard name="WebSockets" type="Backend" />
        <SkillCard name="TypeScript" type="Programming Language" />
        <SkillCard name="JavaScript" type="Programming Language" />
        <SkillCard name="MongoDB" type="Database" />
        <SkillCard name="PostgreSQL" type="Database" />
        <SkillCard name="MySQL" type="Database" />
        <SkillCard name="Prisma" type="ORM" />
        <SkillCard name="Strapi" type="CMS" />
        <SkillCard name="AWS" type="Cloud" />
        <SkillCard name="Terraform" type="DevOps" />
        <SkillCard name="Shell Scripting" type="DevOps" />
        <SkillCard name="Linux" type="DevOps" />
        <SkillCard name="Git" type="Tools" />
      </div>
    </div>
  </section>
);

export default Skills; 