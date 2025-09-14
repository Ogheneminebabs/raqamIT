
import React from 'react';
import { Translation } from '../types';
import AnimatedSection from './AnimatedSection';

interface AboutProps {
  t: Translation['about'];
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 theme-teal:bg-[--color-secondary]">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white theme-teal:text-white">
              {t.title}
            </h2>
            <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 theme-teal:bg-[--color-border] mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay="duration-700">
                <p className="text-lg text-gray-600 dark:text-gray-300 theme-teal:text-[--color-text] mb-6 leading-relaxed">
                    {t.p1}
                </p>
            </AnimatedSection>
            <AnimatedSection delay="duration-1000">
                <p className="text-lg text-gray-600 dark:text-gray-300 theme-teal:text-[--color-text] leading-relaxed">
                    {t.p2}
                </p>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
