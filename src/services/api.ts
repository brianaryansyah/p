import { initialProfileData, initialSkillsData, initialProjectsData, initialMessagesData } from '../data/initialData';
import { ProfileData, SkillItem, ProjectItem, MessageItem } from '../types/portfolio';

const STORAGE_KEYS = {
  PROFILE: 'brian_porto_profile',
  SKILLS: 'brian_porto_skills',
  PROJECTS: 'brian_porto_projects',
  MESSAGES: 'brian_porto_messages',
  AUTH: 'brian_porto_auth_token',
  AUTH_EXPIRY: 'brian_porto_auth_expiry'
};

const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000;
const MAX_LOGIN_ATTEMPTS = 5;
const LOGIN_LOCKOUT_MS = 15 * 60 * 1000;

function generateId(): string {
  return crypto.randomUUID();
}

function safeJsonParse<T>(key: string, fallback: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}

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
    return safeJsonParse(STORAGE_KEYS.PROFILE, initialProfileData);
  },

  updateProfile: async (newProfile: Partial<ProfileData>): Promise<ProfileData> => {
    const current = await apiService.getProfile();
    const updated = { ...current, ...newProfile };
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(updated));
    return updated;
  },

  getSkills: async (): Promise<SkillItem[]> => {
    return safeJsonParse(STORAGE_KEYS.SKILLS, initialSkillsData);
  },

  addSkill: async (skill: Omit<SkillItem, 'id'>): Promise<SkillItem> => {
    const current = await apiService.getSkills();
    const newSkill: SkillItem = { ...skill, id: `sk-${generateId()}` };
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
    return safeJsonParse(STORAGE_KEYS.PROJECTS, initialProjectsData);
  },

  addProject: async (project: Omit<ProjectItem, 'id'>): Promise<ProjectItem> => {
    const current = await apiService.getProjects();
    const newProject: ProjectItem = { ...project, id: `proj-${generateId()}` };
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
    return safeJsonParse(STORAGE_KEYS.MESSAGES, initialMessagesData);
  },

  sendMessage: async (msg: { name: string; email: string; subject: string; message: string }): Promise<MessageItem> => {
    const current = await apiService.getMessages();
    const newMsg: MessageItem = {
      ...msg,
      id: `msg-${generateId()}`,
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
    const attemptsData = safeJsonParse<{ count: number; lockedUntil: number }>('brian_porto_login_attempts', { count: 0, lockedUntil: 0 });

    if (attemptsData.lockedUntil > Date.now()) {
      const remainingMin = Math.ceil((attemptsData.lockedUntil - Date.now()) / 60000);
      throw new Error(`Terlalu banyak percobaan gagal. Coba lagi dalam ${remainingMin} menit.`);
    }

    const validUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (!validUsername || !validPassword) {
      throw new Error('Konfigurasi autentikasi tidak ditemukan!');
    }

    if (username === validUsername && password === validPassword) {
      const token = `bp_${generateId()}`;
      const expiry = Date.now() + TOKEN_EXPIRY_MS;
      localStorage.setItem(STORAGE_KEYS.AUTH, token);
      localStorage.setItem(STORAGE_KEYS.AUTH_EXPIRY, String(expiry));
      localStorage.removeItem('brian_porto_login_attempts');
      return { success: true, token, user: { username: validUsername, role: 'admin', name: 'Brian Aryansyah' } };
    }

    const newCount = attemptsData.count + 1;
    if (newCount >= MAX_LOGIN_ATTEMPTS) {
      localStorage.setItem('brian_porto_login_attempts', JSON.stringify({ count: 0, lockedUntil: Date.now() + LOGIN_LOCKOUT_MS }));
      throw new Error('Terlalu banyak percobaan gagal. Akun dikunci selama 15 menit.');
    }
    localStorage.setItem('brian_porto_login_attempts', JSON.stringify({ count: newCount, lockedUntil: 0 }));
    throw new Error('Username atau password tidak valid!');
  },

  logout: async () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
    localStorage.removeItem(STORAGE_KEYS.AUTH_EXPIRY);
    return true;
  },

  isAuthenticated: (): boolean => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH);
    const expiry = localStorage.getItem(STORAGE_KEYS.AUTH_EXPIRY);
    if (!token) return false;
    if (expiry && Number(expiry) < Date.now()) {
      localStorage.removeItem(STORAGE_KEYS.AUTH);
      localStorage.removeItem(STORAGE_KEYS.AUTH_EXPIRY);
      return false;
    }
    return true;
  }
};
