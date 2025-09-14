
import React from 'react';
import { Translation, Project } from '../types';
import AnimatedSection from './AnimatedSection';

interface ProjectsProps {
  t: Translation['projects'];
  projectsData: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <a href={`#/projects/${project.id}`} className="block bg-white dark:bg-gray-800 theme-teal:bg-[--color-card] rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group">
      <div className="relative">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-white rounded-full px-4 py-2">
                View Details
            </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white theme-teal:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 theme-teal:text-gray-300 mb-4 h-12 overflow-hidden">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 theme-teal:bg-[--color-secondary] theme-teal:text-[--color-border] text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects: React.FC<ProjectsProps> = ({ t, projectsData }) => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 theme-teal:bg-[--color-secondary]">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white theme-teal:text-white">
              {t.title}
            </h2>
            <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 theme-teal:bg-[--color-border] mx-auto mt-4"></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <AnimatedSection key={project.id} delay={`duration-${500 + index * 200}`}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
