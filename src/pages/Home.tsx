import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectShowcase from '../components/ProjectShowcase';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh' }}>
      <Hero />
      <Skills />
      <ProjectShowcase />
      <About />
      <Contact />
    </main>
  );
}
