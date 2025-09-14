
import React from 'react';
import { Translation } from '../types';
import AnimatedSection from './AnimatedSection';

interface HeroProps {
  t: Translation['hero'];
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 theme-teal:bg-[--color-bg] z-0">
            {/* Background decorative pattern */}
            <div className="absolute inset-0 opacity-10 dark:opacity-5 theme-teal:opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        </div>
        <div className="container mx-auto px-6 z-10">
            <AnimatedSection>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white theme-teal:text-white leading-tight mb-4">
                    {t.title}
                </h1>
            </AnimatedSection>
            <AnimatedSection delay="duration-700">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 theme-teal:text-[--color-text] max-w-3xl mx-auto mb-8">
                    {t.subtitle}
                </p>
            </AnimatedSection>
            <AnimatedSection delay="duration-1000">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 theme-teal:bg-[--color-primary] theme-teal:hover:bg-[--color-border] theme-teal:hover:text-[--color-bg] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {t.cta}
                </a>
            </AnimatedSection>
        </div>
    </section>
  );
};

export default Hero;
