
import React from 'react';
import { Translation } from '../types';
import { TwitterIcon, GithubIcon, LinkedInIcon } from './icons';

interface FooterProps {
  t: Translation['footer'];
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 theme-teal:bg-[--color-card] border-t border-gray-200 dark:border-gray-800 theme-teal:border-t-2 theme-teal:border-[--color-border]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white theme-teal:text-[--color-text] mb-4">
              Raqam<span className="text-blue-500 dark:text-blue-400 theme-teal:text-[--color-border]">IT</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 theme-teal:text-gray-300">
              {t.about.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 theme-teal:text-white mb-4">{t.links.title}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-500 dark:hover:text-blue-400 theme-teal:hover:text-[--color-border] transition-colors">{t.links.home}</a></li>
              <li><a href="#about" className="hover:text-blue-500 dark:hover:text-blue-400 theme-teal:hover:text-[--color-border] transition-colors">{t.links.about}</a></li>
              <li><a href="#services" className="hover:text-blue-500 dark:hover:text-blue-400 theme-teal:hover:text-[--color-border] transition-colors">{t.links.services}</a></li>
              <li><a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 theme-teal:hover:text-[--color-border] transition-colors">{t.links.projects}</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 theme-teal:text-white mb-4">{t.socials.title}</h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 theme-teal:hover:text-[--color-border] transition-colors"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white theme-teal:hover:text-[--color-border] transition-colors"><GithubIcon className="w-6 h-6" /></a>
              <a href="#" className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-500 theme-teal:hover:text-[--color-border] transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
            </div>
          </div>
          
          {/* Downloads */}
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 theme-teal:text-white mb-4">{t.downloads.title}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 theme-teal:hover:text-[--color-border] transition-colors">{t.downloads.appStore}</a></li>
              <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 theme-teal:hover:text-[--color-border] transition-colors">{t.downloads.googlePlay}</a></li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 theme-teal:border-[--color-secondary] pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
