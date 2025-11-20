import React from 'react';
import { AppData } from '../types';

interface Props {
  data: AppData;
}

const ResumeView: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white text-black p-8 max-w-[210mm] mx-auto min-h-[297mm]">
      {/* Header */}
      <header className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-wide">{data.personal.name}</h1>
        <p className="text-xl mt-1">{data.personal.title}</p>
        <div className="flex flex-wrap gap-4 mt-3 text-sm">
            <span>{data.personal.location}</span>
            <span>•</span>
            <a href={`mailto:${data.personal.email}`}>{data.personal.email}</a>
            <span>•</span>
            <span>{data.personal.phone}</span>
            <span>•</span>
            <a href={data.personal.linkedin}>LinkedIn</a>
            <span>•</span>
            <a href={data.personal.github}>GitHub</a>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-400 mb-2">Professional Summary</h2>
        <p className="text-sm leading-relaxed">{data.personal.bio}</p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-400 mb-2">Technical Skills</h2>
        <p className="text-sm">
            {data.skills.join(', ')}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-400 mb-2">Experience</h2>
        <div className="space-y-4">
            {data.experience.map((job, i) => (
                <div key={i}>
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-base">{job.role}</h3>
                        <span className="text-sm">{job.start} - {job.end}</span>
                    </div>
                    <div className="text-sm italic mb-1">{job.company}</div>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        {job.bullets.map((b, j) => (
                            <li key={j}>{b}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-gray-400 mb-2">Key Projects</h2>
        <div className="space-y-4">
            {data.projects.map((proj, i) => (
                <div key={i}>
                    <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-base">{proj.title}</h3>
                        <span className="text-sm italic">{proj.tech.slice(0, 5).join(', ')}</span>
                    </div>
                    <p className="text-sm mb-1">{proj.tagline}</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                        {proj.bullets.slice(0, 2).map((b, j) => (
                            <li key={j}>{b}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeView;