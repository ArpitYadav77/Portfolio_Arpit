import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Sun, Moon, Download, Menu, X, Linkedin, Github, Mail } from 'lucide-react';
import { portfolioData } from './data';
import { AppData } from './types';

import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeView from './components/ResumeView';
import JSONLD from './components/JSONLD';

function Layout({ children }: { children?: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans no-print">
       <JSONLD data={portfolioData} />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl tracking-tight text-primary-600 dark:text-primary-500">
              <a href="#">{portfolioData.personal.name.split(' ')[0]}.dev</a>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-gray-100 dark:bg-slate-800 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
                aria-label="Download Resume"
              >
                <Download size={16} />
                Resume
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:ring-2 ring-primary-500 transition-all"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden gap-4">
               <button
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-slate-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-slate-200 hover:text-primary-600 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 w-full bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 shadow-lg" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 dark:text-slate-200 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
               <button
                onClick={() => {
                   window.print();
                   setIsMobileMenuOpen(false);
                }}
                className="w-full text-left flex items-center gap-2 px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600"
              >
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {children}

      <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-900 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
            </p>
            <p className="text-slate-400 dark:text-slate-600 text-xs mt-1">
              Built with React, TypeScript & Tailwind.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="text-slate-400 hover:text-primary-600 transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LandingPage() {
  return (
    <Layout>
      <main className="flex-grow">
        <Hero data={portfolioData.personal} />
        <Skills skills={portfolioData.skills} />
        <Experience jobs={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Contact personal={portfolioData.personal} />
      </main>
    </Layout>
  );
}

export default function App() {
  return (
    <>
      <div className="print-only">
        <ResumeView data={portfolioData} />
      </div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}