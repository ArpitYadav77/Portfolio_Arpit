export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  bio: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface ProjectMetrics {
  latency_ms?: number;
  improvement_pct?: number;
  users?: string;
  [key: string]: string | number | undefined;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  tech: string[];
  role: string;
  repo?: string;
  demo?: string;
  images: string[];
  tags: string[];
  metrics?: ProjectMetrics;
}

export interface AppData {
  personal: PersonalInfo;
  skills: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}
