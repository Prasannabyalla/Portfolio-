
import React from 'react';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white">
    {children} <span className="text-sky-500">.</span>
  </h2>
);

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-sky-500 hover:scale-105 hover:-translate-y-2 shadow-lg">
    <div className="text-sky-400 mb-4 w-16 h-16">{skill.icon}</div>
    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#111111] rounded-xl">
      <SectionTitle>My Tech Stack</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
