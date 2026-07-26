import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/common/ProtectedRoute';

// Client Pages
import { HomePage } from './pages/client/HomePage';

// Admin Pages (Lazy Loaded)
const LoginPage = lazy(() => import('./pages/admin/LoginPage').then(m => ({ default: m.LoginPage })));
const AdminLayout = lazy(() => import('./components/admin/AdminLayout').then(m => ({ default: m.AdminLayout })));
const DashboardOverview = lazy(() => import('./pages/admin/DashboardOverview').then(m => ({ default: m.DashboardOverview })));
const ManageProjects = lazy(() => import('./pages/admin/ManageProjects').then(m => ({ default: m.ManageProjects })));
const ManageSkills = lazy(() => import('./pages/admin/ManageSkills').then(m => ({ default: m.ManageSkills })));
const ManageProfile = lazy(() => import('./pages/admin/ManageProfile').then(m => ({ default: m.ManageProfile })));
const ManageMessages = lazy(() => import('./pages/admin/ManageMessages').then(m => ({ default: m.ManageMessages })));

const AdminLoader = () => (
  <div className="min-h-screen bg-[#08080a] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Loading Dashboard...</span>
    </div>
  </div>
);

export function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Suspense fallback={<AdminLoader />}>
            <Routes>
              {/* 1. Client Portfolio Routes */}
              <Route path="/" element={<HomePage />} />

              {/* 2. Admin Auth Route */}
              <Route path="/admin/login" element={<LoginPage />} />

              {/* 3. Admin Dashboard Routes (Protected) */}
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }>
                <Route index element={<DashboardOverview />} />
                <Route path="projects" element={<ManageProjects />} />
                <Route path="skills" element={<ManageSkills />} />
                <Route path="profile" element={<ManageProfile />} />
                <Route path="messages" element={<ManageMessages />} />
              </Route>

              {/* Fallback Catch-all Route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
