
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { CertificateIcon, ExternalLinkIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white">
    {children} <span className="text-sky-500">.</span>
  </h2>
);

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#111111] rounded-xl">
      <SectionTitle>Licenses & Certifications</SectionTitle>
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-6">
          {CERTIFICATIONS.map((cert, index) => (
            <li key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 flex items-center justify-between transition-colors hover:border-sky-500">
              <div className="flex items-center gap-4">
                <CertificateIcon className="w-10 h-10 text-sky-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                  <p className="text-gray-400">{cert.issuer} - {cert.year}</p>
                </div>
              </div>
              {cert.url && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                  <ExternalLinkIcon className="w-6 h-6" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
