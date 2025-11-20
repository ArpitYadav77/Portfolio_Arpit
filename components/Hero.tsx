import React from 'react';
import { PersonalInfo } from '../types';
import { MapPin, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

interface Props {
  data: PersonalInfo;
}

const Hero: React.FC<Props> = ({ data }) => {
  return (
    <section id="about" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-medium text-primary-600 dark:text-primary-400 tracking-wide uppercase">
              {data.title}
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">{data.name}</span>.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {data.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400 items-center">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{data.location}</span>
            </div>
            <span className="hidden sm:block text-slate-300">|</span>
            <div className="flex gap-4">
              <a href={data.github} target="_blank" rel="noreferrer" className="hover:text-primary-600 transition-colors" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href={`mailto:${data.email}`} className="hover:text-primary-600 transition-colors" aria-label="Email">
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Let's Connect <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
        
        {/* Abstract visual element instead of a photo for a more tech-focused look */}
        <div className="w-full md:w-1/3 aspect-square relative hidden md:block">
           <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
           <div className="relative z-10 w-full h-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
             <div className="grid grid-cols-6 gap-2 opacity-50 rotate-12 scale-125">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse" style={{ animationDelay: `${i * 0.1}s`}}></div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;