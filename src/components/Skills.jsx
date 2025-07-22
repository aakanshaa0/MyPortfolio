import SkillCard from './SkillCard';

const Skills = () => (
  <section id="skills" className="w-full max-w-6xl mx-auto mt-16 mb-4 px-2">
    <h2 className="text-3xl md:text-4xl font-bold text-pink-400 flex items-center gap-2 justify-center mb-8">
      Technical Skills <span className="text-pink-300">🌸</span>
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <SkillCard name="Next.js" type="Frontend" />
      <SkillCard name="DBMS" type="Database" />
      <SkillCard name="MongoDB" type="Database" />
      <SkillCard name="PostgreSQL" type="Database" />
      <SkillCard name="Git" type="Tools" />
      <SkillCard name="Postman" type="Tools" />
      <SkillCard name="REST APIs" type="Backend" />
      <SkillCard name="Express.js" type="Backend" />
      <SkillCard name="Node.js" type="Backend" />
      <SkillCard name="Framer Motion" type="Frontend" />
      <SkillCard name="Material UI" type="Styling" />
      <SkillCard name="Shadcn UI" type="Styling" />
      <SkillCard name="TypeScript" type="Programming Language" />
      <SkillCard name="TailwindCSS" type="Frontend" />
      <SkillCard name="React" type="Frontend" />
      <SkillCard name="JavaScript" type="Programming Language" />
      <SkillCard name="CSS" type="Styling" />
      <SkillCard name="HTML" type="Frontend" />
      <SkillCard name="OOP" type="Concept" />
      <SkillCard name="C/C++" type="Programming Language" />
    </div>
  </section>
);

export default Skills; 