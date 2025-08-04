
import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { ExternalLinkIcon, GitHubIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white">
    {children} <span className="text-sky-500">.</span>
  </h2>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700 group transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 hover:border-sky-500 transform hover:-translate-y-2">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-sky-900/50 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end space-x-4 mt-auto pt-4 border-t border-gray-800">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
            <GitHubIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
