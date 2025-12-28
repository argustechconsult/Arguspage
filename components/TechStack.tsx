
import React from 'react';

const TECHS = [
  'React', 'Next.js', 'Tailwind', 'TypeScript', 'Node.js', 'PostgreSQL', 
  'AWS', 'Framer Motion', 'Three.js', 'Supabase', 'GraphQL', 'Docker'
];

const TechStack: React.FC = () => {
  return (
    <section className="py-20 border-y border-gray-900">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <h3 className="text-center text-gray-500 text-sm font-bold uppercase tracking-[0.3em] mb-12">IMPULSIONANDO A INOVAÇÃO COM</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-80 transition-opacity">
          {TECHS.map((tech) => (
            <span 
              key={tech} 
              className="text-xl md:text-3xl font-montserrat font-black text-white hover:text-blue-500 transition-colors cursor-default select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
