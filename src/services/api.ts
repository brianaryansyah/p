import { initialProfileData, initialSkillsData, initialProjectsData, initialMessagesData } from '../data/initialData';
import { ProfileData, SkillItem, ProjectItem, MessageItem } from '../types/portfolio';

const STORAGE_KEYS = {
  PROFILE: 'brian_porto_profile',
  SKILLS: 'brian_porto_skills',
  PROJECTS: 'brian_porto_projects',
  MESSAGES: 'brian_porto_messages',
  AUTH: 'brian_porto_auth_token'
};

const initializeStorage = (): void => {
  if (!localStorage.getItem(STORAGE_KEYS.PROFILE)) {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(initialProfileData));
  }
  if (!localStorage.getItem(STORAGE_KEYS.SKILLS)) {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(initialSkillsData));
  }
  if (!localStorage.getItem(STORAGE_KEYS.PROJECTS)) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(initialProjectsData));
  }
  if (!localStorage.getItem(STORAGE_KEYS.MESSAGES)) {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(initialMessagesData));
  }
};

initializeStorage();

export const apiService = {
  getProfile: async (): Promise<ProfileData> => {
    const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return data ? JSON.parse(data) : initialProfileData;
  },

  updateProfile: async (newProfile: Partial<ProfileData>): Promise<ProfileData> => {
    const current = await apiService.getProfile();
    const updated = { ...current, ...newProfile };
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updated));
    return updated;
  },

  getSkills: async (): Promise<SkillItem[]> => {
    const data = localStorage.getItem(STORAGE_KEYS.SKILLS);
    return data ? JSON.parse(data) : initialSkillsData;
  },

  addSkill: async (skill: Omit<SkillItem, 'id'>): Promise<SkillItem> => {
    const current = await apiService.getSkills();
    const newSkill: SkillItem = { ...skill, id: `sk-${Date.now()}` };
    const updated = [newSkill, ...current];
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(updated));
    return newSkill;
  },

  updateSkill: async (id: string, skillData: Partial<SkillItem>): Promise<SkillItem[]> => {
    const current = await apiService.getSkills();
    const updated = current.map(item => item.id === id ? { ...item, ...skillData } : item);
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(updated));
    return updated;
  },

  deleteSkill: async (id: string): Promise<string> => {
    const current = await apiService.getSkills();
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(updated));
    return id;
  },

  getProjects: async (): Promise<ProjectItem[]> => {
    const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return data ? JSON.parse(data) : initialProjectsData;
  },

  addProject: async (project: Omit<ProjectItem, 'id'>): Promise<ProjectItem> => {
    const current = await apiService.getProjects();
    const newProject: ProjectItem = { ...project, id: `proj-${Date.now()}` };
    const updated = [newProject, ...current];
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
    return newProject;
  },

  updateProject: async (id: string, projectData: Partial<ProjectItem>): Promise<ProjectItem[]> => {
    const current = await apiService.getProjects();
    const updated = current.map(item => item.id === id ? { ...item, ...projectData } : item);
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
    return updated;
  },

  deleteProject: async (id: string): Promise<string> => {
    const current = await apiService.getProjects();
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
    return id;
  },

  getMessages: async (): Promise<MessageItem[]> => {
    const data = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    return data ? JSON.parse(data) : initialMessagesData;
  },

  sendMessage: async (msg: { name: string; email: string; subject: string; message: string }): Promise<MessageItem> => {
    const current = await apiService.getMessages();
    const newMsg: MessageItem = {
      ...msg,
      id: `msg-${Date.now()}`,
      date: new Date().toISOString(),
      read: false
    };
    const updated = [newMsg, ...current];
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
    return newMsg;
  },

  deleteMessage: async (id: string): Promise<string> => {
    const current = await apiService.getMessages();
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
    return id;
  },

  login: async (username: string, password: string) => {
    if (username === 'admin' && password === 'admin123') {
      const token = 'mock_jwt_token_brian_' + Date.now();
      localStorage.setItem(STORAGE_KEYS.AUTH, token);
      return { success: true, token, user: { username: 'brian', role: 'admin', name: 'Brian Aryansyah' } };
    }
    throw new Error('Username atau password tidak valid!');
  },

  logout: async () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
    return true;
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(STORAGE_KEYS.AUTH);
  }
};
