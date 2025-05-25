import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectsSection from '../components/ProjectsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
    </>
  );
};

export default HomePage; 