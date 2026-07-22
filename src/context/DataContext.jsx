import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiService } from '../services/api';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  // Show Toast Helper
  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Fetch all initial data
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

  // Profile actions
  const updateProfile = async (updatedData) => {
    try {
      const res = await apiService.updateProfile(updatedData);
      setProfile(res);
      showToast('Profil berhasil diperbarui!');
      return res;
    } catch (err) {
      showToast('Gagal memperbarui profil!', 'error');
      throw err;
    }
  };

  // Project CRUD
  const addProject = async (projData) => {
    try {
      const newProj = await apiService.addProject(projData);
      setProjects(prev => [newProj, ...prev]);
      showToast('Proyek baru berhasil ditambahkan!');
      return newProj;
    } catch (err) {
      showToast('Gagal menambahkan proyek!', 'error');
      throw err;
    }
  };

  const updateProject = async (id, projData) => {
    try {
      await apiService.updateProject(id, projData);
      setProjects(prev => prev.map(p => p.id === id ? { ...p, ...projData } : p));
      showToast('Proyek berhasil diperbarui!');
    } catch (err) {
      showToast('Gagal memperbarui proyek!', 'error');
      throw err;
    }
  };

  const deleteProject = async (id) => {
    try {
      await apiService.deleteProject(id);
      setProjects(prev => prev.filter(p => p.id !== id));
      showToast('Proyek berhasil dihapus!');
    } catch (err) {
      showToast('Gagal menghapus proyek!', 'error');
      throw err;
    }
  };

  // Skill CRUD
  const addSkill = async (skillData) => {
    try {
      const newSkill = await apiService.addSkill(skillData);
      setSkills(prev => [newSkill, ...prev]);
      showToast('Skill baru berhasil ditambahkan!');
      return newSkill;
    } catch (err) {
      showToast('Gagal menambahkan skill!', 'error');
      throw err;
    }
  };

  const updateSkill = async (id, skillData) => {
    try {
      await apiService.updateSkill(id, skillData);
      setSkills(prev => prev.map(s => s.id === id ? { ...s, ...skillData } : s));
      showToast('Skill berhasil diperbarui!');
    } catch (err) {
      showToast('Gagal memperbarui skill!', 'error');
      throw err;
    }
  };

  const deleteSkill = async (id) => {
    try {
      await apiService.deleteSkill(id);
      setSkills(prev => prev.filter(s => s.id !== id));
      showToast('Skill berhasil dihapus!');
    } catch (err) {
      showToast('Gagal menghapus skill!', 'error');
      throw err;
    }
  };

  // Contact Message Action
  const sendMessage = async (msgData) => {
    try {
      const newMsg = await apiService.sendMessage(msgData);
      setMessages(prev => [newMsg, ...prev]);
      showToast('Pesan Anda berhasil terkirim! Terima kasih.');
      return newMsg;
    } catch (err) {
      showToast('Gagal mengirim pesan.', 'error');
      throw err;
    }
  };

  const deleteMessage = async (id) => {
    try {
      await apiService.deleteMessage(id);
      setMessages(prev => prev.filter(m => m.id !== id));
      showToast('Pesan dihapus!');
    } catch (err) {
      showToast('Gagal menghapus pesan.', 'error');
      throw err;
    }
  };

  return (
    <DataContext.Provider value={{
      profile,
      skills,
      projects,
      messages,
      loading,
      toast,
      showToast,
      refreshData,
      updateProfile,
      addProject,
      updateProject,
      deleteProject,
      addSkill,
      updateSkill,
      deleteSkill,
      sendMessage,
      deleteMessage
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
