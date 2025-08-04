
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="relative z-10">
        <div className="mb-4">
          <img 
            src="img/prassu.jpg" 
            alt="Byalla Prasanna" 
            className="w-40 h-40 rounded-full mx-auto border-4 border-sky-500 shadow-xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Byalla Prasanna
        </h1>
        <p className="text-2xl md:text-3xl font-light text-sky-400 mb-8 font-roboto-mono">
          Full Stack Web Developer
        </p>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          I build dynamic, responsive, and intuitive web applications from concept to deployment, turning complex problems into elegant solutions.
        </p>
        <div className="flex justify-center space-x-6">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-transform duration-300 transform hover:scale-110">
            <GitHubIcon className="w-8 h-8" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-transform duration-300 transform hover:scale-110">
            <LinkedInIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
