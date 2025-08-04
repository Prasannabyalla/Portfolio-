
import React from 'react';
import type { Skill, Project, Certification } from './types';
import { 
  ReactIcon, NodeJsIcon, TypeScriptIcon, JavaScriptIcon, HtmlIcon, CssIcon, TailwindIcon, 
  MongoDbIcon, ExpressIcon, GitIcon
} from './components/Icons';

export const SKILLS: Skill[] = [
  { name: 'React', icon: React.createElement(ReactIcon) },
  { name: 'Node.js', icon: React.createElement(NodeJsIcon) },
  { name: 'TypeScript', icon: React.createElement(TypeScriptIcon) },
  { name: 'JavaScript', icon: React.createElement(JavaScriptIcon) },
  { name: 'HTML5', icon: React.createElement(HtmlIcon) },
  { name: 'CSS3', icon: React.createElement(CssIcon) },
  { name: 'Tailwind CSS', icon: React.createElement(TailwindIcon) },
  { name: 'MongoDB', icon: React.createElement(MongoDbIcon) },
  { name: 'Express.js', icon: React.createElement(ExpressIcon) },
  { name: 'Git', icon: React.createElement(GitIcon) },
];

export const PROJECTS: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, user authentication, a shopping cart, and a secure checkout process.',
    image: 'https://picsum.photos/seed/project1/600/400',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool that allows users to create projects, assign tasks, and track progress in real-time.',
    image: 'https://picsum.photos/seed/project2/600/400',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'A web application that leverages the Gemini API to generate creative content, from blog posts to social media captions.',
    image: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Next.js', 'Gemini API', 'TypeScript', 'Vercel'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Personal Blog',
    description: 'A sleek, modern blog platform with a custom CMS for writing and managing articles, built for performance and SEO.',
    image: 'https://picsum.photos/seed/project4/600/400',
    tags: ['Gatsby', 'GraphQL', 'Contentful', 'Styled Components'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Full-Stack Web Development', issuer: 'Coursera', year: 2023, url: '#' },
  { name: 'React - The Complete Guide', issuer: 'Udemy', year: 2023, url: '#' },
  { name: 'Certified JavaScript Developer', issuer: 'FreeCodeCamp', year: 2022, url: '#' },
  { name: 'Google Cloud Certified Associate Cloud Engineer', issuer: 'Google Cloud', year: 2024, url: '#' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/prasannabyalla',
  linkedin: 'https://linkedin.com/in/prasannabyalla',
  email: 'mailto:prasanna.byalla@example.com',
};

export const PORTFOLIO_DATA_FOR_AI = `
Byalla Prasanna is a talented Full Stack Web Developer with a passion for building elegant and functional web applications.

Skills: React, Node.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, MongoDB, Express.js, and Git.

Projects:
1. E-commerce Platform: A full-featured e-commerce website using the MERN stack.
2. Task Management App: A real-time collaborative tool built with React and Firebase.
3. AI Content Generator: A web app using Next.js and the Gemini API.
4. Personal Blog: A performance-focused blog with Gatsby and a headless CMS.

Certifications:
- Full-Stack Web Development from Coursera (2023)
- React - The Complete Guide from Udemy (2023)
- Certified JavaScript Developer from FreeCodeCamp (2022)
- Google Cloud Certified Associate Cloud Engineer from Google Cloud (2024)

Contact: Prasanna can be reached via LinkedIn or GitHub. The primary contact email is prasanna.byalla@example.com.
`;