import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ExperienceSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;