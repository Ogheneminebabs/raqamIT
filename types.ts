
// FIX: Import React to fix "Cannot find namespace 'React'" error.
import React from 'react';

export type Theme = 'light' | 'dark' | 'theme-teal';
export type Language = 'en' | 'ar';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  details: {
    longDescription: string;
    features: string[];
    techStack: string[];
    gallery: string[];
  };
}

export interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

type ProjectTranslation = {
  title: string;
  description: string;
  tags: string[];
  details: {
    longDescription: string;
    features: string[];
    techStack: string[];
  };
};

// Type definition for the deeply nested translations object
export type Translation = {
  header: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    language: string;
    theme: string;
    back_to_home: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
  };
  services: {
    title: string;
    webMobile: {
      title: string;
      description: string;
    };
    software: {
      title: string;
      description: string;
    };
    hardware: {
      title: string;
      description: string;
    };
  };
  projects: {
    title: string;
    huruf: ProjectTranslation;
    tarqib: ProjectTranslation;
    wordFinder: ProjectTranslation;
  };
  contact: {
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    about: {
      title: string;
      description: string;
    };
    links: {
      title: string;
      home: string;
      about: string;
      services: string;
      projects: string;
    };
    socials: {
      title: string;
    };
    downloads: {
      title: string;
      appStore: string;
      googlePlay: string;
    };
    copyright: string;
  };
};
