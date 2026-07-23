import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiService } from '../services/api';
import { DataContextType, ProfileData, SkillItem, ProjectItem, MessageItem } from '../types/portfolio';

const DataContext = createContext<DataContextType | null>(null);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; id: number } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const refreshData = async () => {
    setLoading(true);
    try {
      const [profData, skData, projData, msgData] = await Promise.all([
        apiService.getProfile(),
        apiService.getSkills(),
        apiService.getProjects(),
        apiService.getMessages()
      ]);
      setProfile(profData);
      setSkills(skData);
      setProjects(projData);
      setMessages(msgData);
    } catch (err) {
      console.error('Failed to load portfolio data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const updateProfile = async (updatedData: Partial<ProfileData>) => {
    try {
      const res = await apiService.updateProfile(updatedData);
      setProfile(res);
      showToast('Profil berhasil diperbarui!');
    } catch (err) {
      showToast('Gagal memperbarui profil!', 'error');
      throw err;
    }
  };

  const addProject = async (projData: Omit<ProjectItem, 'id'>) => {
    try {
      const newProj = await apiService.addProject(projData);
      setProjects(prev => [newProj, ...prev]);
      showToast('Proyek baru berhasil ditambahkan!');
    } catch (err) {
      showToast('Gagal menambahkan proyek!', 'error');
      throw err;
    }
  };

  const updateProject = async (id: string, projData: Partial<ProjectItem>) => {
    try {
      await apiService.updateProject(id, projData);
      setProjects(prev => prev.map(p => p.id === id ? { ...p, ...projData } : p));
      showToast('Proyek berhasil diperbarui!');
    } catch (err) {
      showToast('Gagal memperbarui proyek!', 'error');
      throw err;
    }
  };

  const deleteProject = async (id: string) => {
    try {
      await apiService.deleteProject(id);
      setProjects(prev => prev.filter(p => p.id !== id));
      showToast('Proyek berhasil dihapus!');
    } catch (err) {
      showToast('Gagal menghapus proyek!', 'error');
      throw err;
    }
  };

  const addSkill = async (skillData: Omit<SkillItem, 'id'>) => {
    try {
      const newSkill = await apiService.addSkill(skillData);
      setSkills(prev => [newSkill, ...prev]);
      showToast('Skill baru berhasil ditambahkan!');
    } catch (err) {
      showToast('Gagal menambahkan skill!', 'error');
      throw err;
    }
  };

  const updateSkill = async (id: string, skillData: Partial<SkillItem>) => {
    try {
      await apiService.updateSkill(id, skillData);
      setSkills(prev => prev.map(s => s.id === id ? { ...s, ...skillData } : s));
      showToast('Skill berhasil diperbarui!');
    } catch (err) {
      showToast('Gagal memperbarui skill!', 'error');
      throw err;
    }
  };

  const deleteSkill = async (id: string) => {
    try {
      await apiService.deleteSkill(id);
      setSkills(prev => prev.filter(s => s.id !== id));
      showToast('Skill berhasil dihapus!');
    } catch (err) {
      showToast('Gagal menghapus skill!', 'error');
      throw err;
    }
  };

  const sendMessage = async (msgData: { name: string; email: string; subject: string; message: string }) => {
    try {
      const newMsg = await apiService.sendMessage(msgData);
      setMessages(prev => [newMsg, ...prev]);
      showToast('Pesan Anda berhasil terkirim! Terima kasih.');
    } catch (err) {
      showToast('Gagal mengirim pesan.', 'error');
      throw err;
    }
  };

  const markMessageRead = async (id: string) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));
  };

  const deleteMessage = async (id: string) => {
    try {
      await apiService.deleteMessage(id);
      setMessages(prev => prev.filter(m => m.id !== id));
      showToast('Pesan dihapus!');
    } catch (err) {
      showToast('Gagal menghapus pesan.', 'error');
      throw err;
    }
  };

  const defaultProfile: ProfileData = {
    name: 'Brian Aryansyah Pamungkas',
    tagline: 'Building High-Performance Web & AI Systems',
    roles: ['Fullstack Web Developer', 'Machine Learning Enthusiast'],
    university: 'Universitas Dian Nuswantoro',
    major: 'Teknik Informatika',
    semester: 4,
    location: 'Semarang, Indonesia',
    bio: '',
    email: 'brianaryansyahp@gmail.com',
    github: 'https://github.com/brianaryansyah',
    linkedin: 'https://linkedin.com/in/brianaryansyah',
    instagram: 'https://instagram.com/brianaryansyah',
    status: 'Terbuka untuk Projek & Kolaborasi'
  };

  return (
    <DataContext.Provider value={{
      profile: profile || defaultProfile,
      skills,
      projects,
      messages,
      toast,
      showToast,
      updateProfile,
      addProject,
      updateProject,
      deleteProject,
      addSkill,
      updateSkill,
      deleteSkill,
      sendMessage,
      markMessageRead,
      deleteMessage
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
