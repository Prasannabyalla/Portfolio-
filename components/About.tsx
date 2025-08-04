
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white">
    {children} <span className="text-sky-500">.</span>
  </h2>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <SectionTitle>About Me</SectionTitle>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <img 
            src="img/prassu.jpg" 
            alt="Byalla Prasanna coding" 
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-2/3 text-lg text-gray-300 space-y-4">
          <p>
            Hello! I'm Prasanna, a dedicated full-stack developer with a deep passion for technology and creative problem-solving. My journey into web development started with a simple "Hello, World!" and has since evolved into building sophisticated, scalable applications.
          </p>
          <p>
            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have a strong command of modern web technologies like TypeScript and Tailwind CSS. I thrive on bringing ideas to life, whether it's designing a user-friendly frontend or architecting a robust backend.
          </p>
          <p>
            Beyond coding, I am a lifelong learner, constantly exploring new technologies and frameworks to stay at the forefront of the industry. I am currently fascinated by the potential of AI and have been integrating it into my recent projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
