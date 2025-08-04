
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
           <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-transform duration-300 transform hover:scale-110">
            <GitHubIcon className="w-7 h-7" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-sky-400 transition-transform duration-300 transform hover:scale-110">
            <LinkedInIcon className="w-7 h-7" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Byalla Prasanna. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS, and a touch of AI magic ✨</p>
      </div>
    </footer>
  );
};

export default Footer;
