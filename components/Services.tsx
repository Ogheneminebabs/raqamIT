
import React from 'react';
import { Translation, Service } from '../types';
import AnimatedSection from './AnimatedSection';
import { DevicePhoneMobileIcon, CodeBracketIcon, CpuChipIcon } from './icons';

interface ServicesProps {
  t: Translation['services'];
}

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-white dark:bg-gray-800 theme-teal:bg-[--color-card] p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center">
      <div className="bg-blue-100 dark:bg-blue-900/50 theme-teal:bg-[--color-secondary] text-blue-500 dark:text-blue-400 theme-teal:text-[--color-border] rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
        <Icon className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white theme-teal:text-white mb-2">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 theme-teal:text-gray-300">{service.description}</p>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ t }) => {
  const services: Service[] = [
    {
      id: 'web-mobile',
      icon: DevicePhoneMobileIcon,
      title: t.webMobile.title,
      description: t.webMobile.description
    },
    {
      id: 'software',
      icon: CodeBracketIcon,
      title: t.software.title,
      description: t.software.description
    },
    {
      id: 'hardware',
      icon: CpuChipIcon,
      title: t.hardware.title,
      description: t.hardware.description
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 theme-teal:bg-[--color-bg]">
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
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={`duration-${500 + index * 200}`}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
