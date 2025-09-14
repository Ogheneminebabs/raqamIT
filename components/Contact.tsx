
import React from 'react';
import { Translation } from '../types';
import AnimatedSection from './AnimatedSection';

interface ContactProps {
  t: Translation['contact'];
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 theme-teal:bg-[--color-bg]">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white theme-teal:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 theme-teal:text-[--color-text] max-w-2xl mx-auto mb-8">
            {t.description}
          </p>
          <a href="mailto:contact@raqam.com" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 theme-teal:bg-[--color-primary] theme-teal:hover:bg-[--color-border] theme-teal:hover:text-[--color-bg] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t.cta}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
