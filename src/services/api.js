import { initialProfileData, initialSkillsData, initialProjectsData, initialMessagesData } from '../data/initialData';

// Storage Keys
const STORAGE_KEYS = {
  PROFILE: 'brian_porto_profile',
  SKILLS: 'brian_porto_skills',
  PROJECTS: 'brian_porto_projects',
  MESSAGES: 'brian_porto_messages',
  AUTH: 'brian_porto_auth_token'
};

// Initialize localStorage with initial data if empty
const initializeStorage = () => {
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

// REST API Service Adapter (Ready to connect with CodeIgniter 4 API)
export const apiService = {
  // --- PROFILE API ---
  getProfile: async () => {
    // For real backend CodeIgniter 4: return await fetch('/api/profile').then(r => r.json());
    const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return JSON.parse(data || JSON.stringify(initialProfileData));
  },
  
  updateProfile: async (newProfile) => {
    // CodeIgniter 4 endpoint: PUT /api/profile
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(newProfile));
    return newProfile;
  },

  // --- SKILLS API ---
  getSkills: async () => {
    // CodeIgniter 4 endpoint: GET /api/skills
    const data = localStorage.getItem(STORAGE_KEYS.SKILLS);
    return JSON.parse(data || JSON.stringify(initialSkillsData));
  },

  addSkill: async (skill) => {
    // CodeIgniter 4 endpoint: POST /api/skills
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.SKILLS) || '[]');
    const newSkill = { ...skill, id: `sk-${Date.now()}` };
    const updated = [newSkill, ...current];
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(updated));
    return newSkill;
  },

  updateSkill: async (id, skillData) => {
    // CodeIgniter 4 endpoint: PUT /api/skills/{id}
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.SKILLS) || '[]');
    const updated = current.map(item => item.id === id ? { ...item, ...skillData } : item);
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(updated));
    return updated;
  },

  deleteSkill: async (id) => {
    // CodeIgniter 4 endpoint: DELETE /api/skills/{id}
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.SKILLS) || '[]');
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(updated));
    return id;
  },

  // --- PROJECTS API ---
  getProjects: async () => {
    // CodeIgniter 4 endpoint: GET /api/projects
    const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return JSON.parse(data || JSON.stringify(initialProjectsData));
  },

  addProject: async (project) => {
    // CodeIgniter 4 endpoint: POST /api/projects
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS) || '[]');
    const newProject = { ...project, id: `proj-${Date.now()}` };
    const updated = [newProject, ...current];
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
    return newProject;
  },

  updateProject: async (id, projectData) => {
    // CodeIgniter 4 endpoint: PUT /api/projects/{id}
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS) || '[]');
    const updated = current.map(item => item.id === id ? { ...item, ...projectData } : item);
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
    return updated;
  },

  deleteProject: async (id) => {
    // CodeIgniter 4 endpoint: DELETE /api/projects/{id}
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS) || '[]');
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(updated));
    return id;
  },

  // --- MESSAGES API ---
  getMessages: async () => {
    // CodeIgniter 4 endpoint: GET /api/messages
    const data = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    return JSON.parse(data || JSON.stringify(initialMessagesData));
  },

  sendMessage: async (msg) => {
    // CodeIgniter 4 endpoint: POST /api/contact
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]');
    const newMsg = { ...msg, id: `msg-${Date.now()}`, date: new Date().toISOString(), read: false };
    const updated = [newMsg, ...current];
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
    return newMsg;
  },

  deleteMessage: async (id) => {
    // CodeIgniter 4 endpoint: DELETE /api/messages/{id}
    const current = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]');
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
    return id;
  },

  // --- AUTH MOCK ---
  login: async (username, password) => {
    // CodeIgniter 4 Auth endpoint: POST /api/auth/login (JWT)
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

  isAuthenticated: () => {
    return !!localStorage.getItem(STORAGE_KEYS.AUTH);
  }
};
