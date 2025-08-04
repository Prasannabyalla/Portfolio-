
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CareerBot from './components/CareerBot';
import { BotIcon } from './components/Icons';

const App: React.FC = () => {
  const [isBotOpen, setIsBotOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsBotOpen(!isBotOpen)}
          className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out"
          aria-label="Open AI Career Bot"
        >
          <BotIcon className="w-8 h-8" />
        </button>
      </div>
      <CareerBot isOpen={isBotOpen} onClose={() => setIsBotOpen(false)} />
    </div>
  );
};

export default App;
