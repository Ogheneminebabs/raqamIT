
import React, { useState, useEffect, useCallback } from 'react';
import { Theme, Language, Translation } from '../types';
import { SunIcon, MoonIcon, DropletIcon, LanguageIcon } from './icons';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation['header'];
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme, language, setLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  },[]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#about', label: t.about },
    { href: '#services', label: t.services },
    { href: '#projects', label: t.projects },
    { href: '#contact', label: t.contact },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 theme-teal:bg-[--color-bg]/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#/" className="text-2xl font-bold text-gray-800 dark:text-white theme-teal:text-[--color-text]">
            Raqam<span className="text-blue-500 dark:text-blue-400 theme-teal:text-[--color-border]">IT</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 theme-teal:text-[--color-text] hover:text-blue-500 dark:hover:text-blue-400 theme-teal:hover:text-[--color-border] transition-colors">{link.label}</a>
            ))}
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
             {/* Theme and Language Toggles */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse p-1 rounded-full bg-gray-200 dark:bg-gray-800 theme-teal:bg-[--color-secondary]">
                <button onClick={() => setTheme('light')} className={`p-1.5 rounded-full transition-colors ${theme === 'light' ? 'bg-blue-500 text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'}`} aria-label="Switch to light theme"><SunIcon className="w-5 h-5" /></button>
                <button onClick={() => setTheme('dark')} className={`p-1.5 rounded-full transition-colors ${theme === 'dark' ? 'bg-blue-500 text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'}`} aria-label="Switch to dark theme"><MoonIcon className="w-5 h-5" /></button>
                <button onClick={() => setTheme('theme-teal')} className={`p-1.5 rounded-full transition-colors ${theme === 'theme-teal' ? 'bg-[--color-primary] text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'}`} aria-label="Switch to teal theme"><DropletIcon className="w-5 h-5" /></button>
            </div>
            <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 theme-teal:bg-[--color-secondary] text-gray-600 dark:text-gray-300 theme-teal:text-[--color-text] hover:bg-gray-300 dark:hover:bg-gray-700 theme-teal:hover:bg-[--color-primary]" aria-label="Toggle language">
              <span className="font-semibold">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>


            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path fillRule="evenodd" d={!isOpen ? "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" : "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-300 theme-teal:text-[--color-text] hover:text-blue-500 dark:hover:text-blue-400 theme-teal:hover:text-[--color-border] px-3 py-2 rounded-md text-base font-medium">{link.label}</a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
