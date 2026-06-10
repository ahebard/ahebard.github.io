export interface Profile {
  name: string;
  title: string;
  tagline: string;
  resumeUrl: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface LanguageIcon {
  name: string;
  icon: string;
}

export interface Position {
  period: string;
  role: string;
  points: string[];
}

export interface CareerEntry {
  company: string;
  logo: string;
  tools: string[];
  positions: Position[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Marathon {
  name: string;
  icon: string;
  completed: boolean;
}

export interface Cat {
  name: string;
  icon: string;
}

export interface BeyondWorkEntry {
  title: string;
  description: string;
  marathons?: Marathon[];
  cats?: Cat[];
  image?: string;
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  logo: string;
  gpa?: string;
}
