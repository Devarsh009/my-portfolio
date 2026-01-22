'use client';
import dynamic from 'next/dynamic';

import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/projects';
import Skills from '@/components/Skills';
import Research from '@/components/Research';
import Experience from '@/components/Experience';
import ResumeSection from '@/components/ResumeSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTopOnLoad from '@/components/ScrollToTopOnLoad';

// 👇 Dynamic import to disable SSR for Hero
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b12] text-white">
      <ScrollToTopOnLoad />
      <Navbar />
      <Hero id="home" />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}
