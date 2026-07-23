export interface ProfileData {
  name: string;
  tagline: string;
  roles: string[];
  university: string;
  major: string;
  semester: number;
  location: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  status: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Machine Learning' | 'Database' | 'DevOps' | 'Data Science & AI' | string;
  icon: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | string;
  description: string;
  featured: boolean;
  size?: string;
  color?: string;
  badgeColor?: string;
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  architectureDetails?: string;
  keyAchievements?: string[];
  image: string;
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  date: string;
}

export interface MessageItem {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

export interface DataContextType {
  profile: ProfileData;
  skills: SkillItem[];
  projects: ProjectItem[];
  messages: MessageItem[];
  toast: { message: string; type: 'success' | 'error' | 'info' } | null;
  updateProfile: (data: Partial<ProfileData>) => Promise<void>;
  addSkill: (skill: Omit<SkillItem, 'id'>) => Promise<void>;
  updateSkill: (id: string, skill: Partial<SkillItem>) => Promise<void>;
  deleteSkill: (id: string) => Promise<void>;
  addProject: (project: Omit<ProjectItem, 'id'>) => Promise<void>;
  updateProject: (id: string, project: Partial<ProjectItem>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  sendMessage: (msg: { name: string; email: string; subject: string; message: string }) => Promise<void>;
  markMessageRead: (id: string) => Promise<void>;
  deleteMessage: (id: string) => Promise<void>;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}
