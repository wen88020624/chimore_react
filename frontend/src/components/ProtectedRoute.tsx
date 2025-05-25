import React from 'react';
import { Navigate } from 'react-router-dom';
import { authApi } from '../services/api';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAdmin = false 
}) => {
  const isAuthenticated = authApi.isAuthenticated();
  const currentUser = authApi.getCurrentUser();

  // 如果需要登入但未登入，重定向到登入頁面
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // 如果需要管理員權限但用戶不是管理員
  if (requireAdmin && currentUser?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute; 