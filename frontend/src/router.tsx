import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import ProjectsPageAdmin from './pages/ProjectsPageAdmin';
import ProtectedRoute from './components/ProtectedRoute';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      
      {/* 管理員登入頁面（獨立佈局） */}
      <Route path="/admin/login" element={<AdminLogin />} />
      
      {/* 管理員頁面（需要身份驗證） */}
      <Route path="/admin" element={<App />}>
        <Route 
          path="projects" 
          element={
            <ProtectedRoute requireAdmin>
              <ProjectsPageAdmin />
            </ProtectedRoute>
          } 
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter; 