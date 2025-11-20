import React from 'react';

interface Props {
  skills: string[];
}

const Skills: React.FC<Props> = ({ skills }) => {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Arsenal</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Technologies I use to build scalable solutions.</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div 
              key={skill}
              className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-primary-500 dark:hover:border-primary-500 transition-colors cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;