import React from 'react';
import { ExperienceItem } from '../types';
import { Calendar, Briefcase } from 'lucide-react';

interface Props {
  jobs: ExperienceItem[];
}

const Experience: React.FC<Props> = ({ jobs }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Experience</h2>
        
        <div className="relative space-y-12">
          {/* Vertical Line for Timeline */}
          <div className="absolute left-4 md:left-0 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

          {jobs.map((job, index) => (
            <div key={index} className="relative pl-0 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-white dark:ring-slate-900 hidden md:block group-hover:scale-125 transition-transform"></div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        {job.role} <span className="text-primary-600">@ {job.company}</span>
                    </h3>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 sm:mt-0 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 w-fit">
                    <Calendar size={14} />
                    {job.start} — {job.end}
                </div>
              </div>

              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                {job.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0"></span>
                        <span className="leading-relaxed">{bullet}</span>
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;