
import React, { useState, useEffect, useMemo } from 'react';
import { Theme, Language, Project } from './types';
import { translations } from './constants/translations';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('raqam-theme') as Theme) || 'light';
    }
    return 'light';
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('raqam-language') as Language) || 'en';
    }
    return 'en';
  });
  
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'theme-teal');
    root.classList.add(theme);
    localStorage.setItem('raqam-theme', theme);
  }, [theme]);
  
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('lang', language);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('raqam-language', language);
  }, [language]);

  const t = useMemo(() => translations[language], [language]);

  const projectsData: Project[] = useMemo(() => [
    {
      id: 'huruf',
      title: t.projects.huruf.title,
      description: t.projects.huruf.description,
      imageUrl: 'https://picsum.photos/seed/huruf/800/600',
      tags: t.projects.huruf.tags,
      details: {
        ...t.projects.huruf.details,
        gallery: [
            'https://picsum.photos/seed/huruf-1/800/600',
            'https://picsum.photos/seed/huruf-2/800/600',
            'https://picsum.photos/seed/huruf-3/800/600',
        ]
      }
    },
    {
      id: 'tarqib',
      title: t.projects.tarqib.title,
      description: t.projects.tarqib.description,
      imageUrl: 'https://picsum.photos/seed/tarqib/800/600',
      tags: t.projects.tarqib.tags,
      details: {
        ...t.projects.tarqib.details,
        gallery: [
            'https://picsum.photos/seed/tarqib-1/800/600',
            'https://picsum.photos/seed/tarqib-2/800/600',
            'https://picsum.photos/seed/tarqib-3/800/600',
        ]
      }
    },
    {
      id: 'word-finder',
      title: t.projects.wordFinder.title,
      description: t.projects.wordFinder.description,
      imageUrl: 'https://picsum.photos/seed/finder/800/600',
      tags: t.projects.wordFinder.tags,
      details: {
          ...t.projects.wordFinder.details,
          gallery: [
              'https://picsum.photos/seed/finder-1/800/600',
              'https://picsum.photos/seed/finder-2/800/600',
              'https://picsum.photos/seed/finder-3/800/600',
          ]
      }
    }
  ], [t]);
  
  const renderContent = () => {
    if (route.startsWith('#/projects/')) {
      const projectId = route.split('/')[2];
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        return <ProjectDetail project={project} t={{ back_to_home: t.header.back_to_home }} />;
      }
    }
    
    return (
      <>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Services t={t.services} />
        <Projects t={t.projects} projectsData={projectsData} />
        <Contact t={t.contact} />
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
        t={t.header}
      />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer t={t.footer} />
    </div>
  );
};

export default App;
