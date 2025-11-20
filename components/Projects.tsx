import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ExternalLink, Github, ChevronRight, X, BarChart3 } from 'lucide-react';

interface Props {
  projects: ProjectItem[];
}

const ProjectModal = ({ project, onClose }: { project: ProjectItem; onClose: () => void }) => {
  // Prevent scrolling when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col relative">
        
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-900 z-10 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <X size={24} className="text-slate-500" />
            </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
            
            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                <img src={project.images[0]} alt={project.title} className="w-full h-64 md:h-96 object-cover" loading="lazy" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Overview</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Contributions</h4>
                         <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                            {project.bullets.map((bullet, i) => (
                                <li key={i} className="flex gap-2">
                                    <span className="text-primary-500">•</span>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Metrics Card */}
                    {project.metrics && (
                        <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl border border-primary-100 dark:border-primary-900/50">
                            <div className="flex items-center gap-2 text-primary-700 dark:text-primary-400 font-semibold mb-3">
                                <BarChart3 size={20} />
                                <span>Impact Metrics</span>
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                {Object.entries(project.metrics).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center text-sm">
                                        <span className="text-slate-600 dark:text-slate-400 capitalize">{key.replace('_', ' ')}:</span>
                                        <span className="font-mono font-bold text-slate-900 dark:text-white">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">{t}</span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                         {project.repo && (
                             <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200 font-medium">
                                 <Github size={18} /> View Code
                             </a>
                         )}
                         {project.demo && (
                             <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors">
                                 <ExternalLink size={18} /> Live Demo
                             </a>
                         )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<Props> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
             <p className="mt-2 text-slate-600 dark:text-slate-400">Case studies in scalability and system design.</p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
                key={project.id} 
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                    <div className="text-primary-600 dark:text-primary-400 font-medium text-sm tracking-wide uppercase">
                        {project.role}
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{project.tagline}</p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                </p>

                {/* Quick Stats / Bullets */}
                <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-lg border border-slate-100 dark:border-slate-800">
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                        {project.bullets.slice(0, 2).map((b, i) => (
                            <li key={i} className="flex gap-2">
                                <span className="text-green-500 font-bold">✓</span> {b}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map(t => (
                        <span key={t} className="px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-gray-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium text-slate-400">+ {project.tech.length - 4} more</span>
                    )}
                </div>

                <div className="pt-2 flex gap-4">
                    <button 
                        onClick={() => setSelectedProject(project)}
                        className="group flex items-center gap-2 font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                        View Case Study <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="relative rounded-xl overflow-hidden shadow-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 aspect-video transition-transform duration-300 group-hover:-translate-y-2">
                    <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;