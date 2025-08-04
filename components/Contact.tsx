
import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { MailIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 text-white">
    {children} <span className="text-sky-500">.</span>
  </h2>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    // In a real app, you would integrate an email service here.
    setTimeout(() => {
      setStatus(`Thank you, ${formData.name}! Your message has been sent.`);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-8">
          Have a project in mind or just want to say hello? I’d love to hear from you.
          Send me a message or connect with me via email.
        </p>
        <a href={SOCIAL_LINKS.email} className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 text-lg font-roboto-mono mb-12">
          <MailIcon className="w-6 h-6" />
          234g1a05c3@srit.ac.in
        </a>
      </div>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
        ></textarea>
        <div className="text-center">
          <button type="submit" className="bg-sky-600 text-white font-bold py-3 px-8 rounded-md hover:bg-sky-700 transition-colors duration-300">
            Send Message
          </button>
        </div>
        {status && <p className="text-center text-green-400 mt-4">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
