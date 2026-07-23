import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';

// Client Pages
import { HomePage } from './pages/client/HomePage';

// Admin Pages
import { LoginPage } from './pages/admin/LoginPage';
import { AdminLayout } from './components/admin/AdminLayout';
import { DashboardOverview } from './pages/admin/DashboardOverview';
import { ManageProjects } from './pages/admin/ManageProjects';
import { ManageSkills } from './pages/admin/ManageSkills';
import { ManageProfile } from './pages/admin/ManageProfile';
import { ManageMessages } from './pages/admin/ManageMessages';

export function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
            {/* 1. Client Portfolio Routes */}
            <Route path="/" element={<HomePage />} />

            {/* 2. Admin Auth Route */}
            <Route path="/admin/login" element={<LoginPage />} />

            {/* 3. Admin Dashboard Routes (Protected) */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="projects" element={<ManageProjects />} />
              <Route path="skills" element={<ManageSkills />} />
              <Route path="profile" element={<ManageProfile />} />
              <Route path="messages" element={<ManageMessages />} />
            </Route>

            {/* Fallback Catch-all Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
