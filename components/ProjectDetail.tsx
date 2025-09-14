
import React from 'react';
import { Project } from '../types';
import AnimatedSection from './AnimatedSection';

interface ProjectDetailProps {
  project: Project;
  t: {
    back_to_home: string;
  }
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, t }) => {
  return (
    <div className="bg-white dark:bg-gray-800 theme-teal:bg-[--color-secondary] py-10 md:py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <a href="#/" className="text-blue-500 dark:text-blue-400 theme-teal:text-[--color-border] hover:underline mb-8 inline-block font-semibold">
            {t.back_to_home}
          </a>
        </AnimatedSection>
        <AnimatedSection delay="duration-300">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white theme-teal:text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 theme-teal:bg-[--color-secondary] theme-teal:text-[--color-border] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <AnimatedSection delay="duration-500">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover rounded-lg shadow-lg mb-8" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white theme-teal:text-white mb-4">About the project</h2>
                    <p className="text-gray-600 dark:text-gray-300 theme-teal:text-[--color-text] leading-relaxed whitespace-pre-wrap">
                        {project.details.longDescription}
                    </p>
                </AnimatedSection>
                
                <AnimatedSection delay="duration-700" className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white theme-teal:text-white mb-4">Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {project.details.gallery.map((img, index) => (
                            <img key={index} src={img} alt={`${project.title} gallery image ${index+1}`} className="rounded-lg shadow-md aspect-video object-cover" />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
            
            <div className="lg:col-span-1">
                <AnimatedSection delay="duration-900">
                    <div className="bg-gray-50 dark:bg-gray-900 theme-teal:bg-[--color-bg] p-6 rounded-lg shadow-md sticky top-24">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white theme-teal:text-white mb-4">Key Features</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 theme-teal:text-[--color-text]">
                            {project.details.features.map(feature => <li key={feature}>{feature}</li>)}
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white theme-teal:text-white mt-8 mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.details.techStack.map(tech => (
                                <span key={tech} className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 theme-teal:bg-[--color-secondary] theme-teal:text-[--color-border] text-sm font-medium px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
