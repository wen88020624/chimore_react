import { Project, CreateProjectDto, UpdateProjectDto, User, LoginRequest, LoginResponse } from '../types';

const API_BASE_URL = 'http://localhost:3000';

// API 請求工具函數
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
  requireAuth: boolean = false
): Promise<T> {
  const token = localStorage.getItem('adminToken');
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && requireAuth && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}

// 專案相關 API
export const projectsApi = {
  // 獲取所有專案
  getAll: (): Promise<Project[]> => 
    apiRequest<Project[]>('/projects'),

  // 根據分類獲取專案
  getByCategory: (category: string): Promise<Project[]> => 
    apiRequest<Project[]>(`/projects?category=${encodeURIComponent(category)}`),

  // 根據狀態獲取專案
  getByStatus: (status: string): Promise<Project[]> => 
    apiRequest<Project[]>(`/projects?status=${status}`),

  // 獲取單個專案
  getById: (id: string): Promise<Project> => 
    apiRequest<Project>(`/projects/${id}`),

  // 創建專案
  create: (data: CreateProjectDto): Promise<Project> => 
    apiRequest<Project>('/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    }, true),

  // 更新專案
  update: (id: string, data: UpdateProjectDto): Promise<Project> => 
    apiRequest<Project>(`/projects/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }, true),

  // 刪除專案
  delete: (id: string): Promise<void> => 
    apiRequest<void>(`/projects/${id}`, {
      method: 'DELETE',
    }, true),

  // 創建範例專案
  createSamples: (): Promise<Project[]> => 
    apiRequest<Project[]>('/projects/sample/urban-renewal', {
      method: 'POST',
    }, true),
};

// 身份驗證相關 API（模擬）
export const authApi = {
  // 管理員登入（簡化版本，實際應該有更安全的實現）
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    // 這裡是簡化的登入邏輯，實際應該調用後端API
    if (credentials.email === 'admin@chimore.com' && credentials.password === 'admin123') {
      const user: User = {
        id: 1,
        email: credentials.email,
        name: '管理員',
        role: 'admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      const token = 'mock-admin-token-' + Date.now();
      localStorage.setItem('adminToken', token);
      localStorage.setItem('adminUser', JSON.stringify(user));
      
      return { user, token };
    } else {
      throw new Error('帳號或密碼錯誤');
    }
  },

  // 登出
  logout: (): void => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
  },

  // 檢查是否已登入
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('adminToken');
  },

  // 獲取當前用戶
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('adminUser');
    return userStr ? JSON.parse(userStr) : null;
  },
};

// 地區分類選項
export const REGION_CATEGORIES = [
  '台北市',
  '新北市',
  '桃園市',
  '台中市',
  '台南市',
  '高雄市',
  '基隆市',
  '新竹市',
  '嘉義市',
  '新竹縣',
  '苗栗縣',
  '彰化縣',
  '南投縣',
  '雲林縣',
  '嘉義縣',
  '屏東縣',
  '宜蘭縣',
  '花蓮縣',
  '台東縣',
  '澎湖縣',
  '金門縣',
  '連江縣',
];

// 專案分類選項
export const PROJECT_CATEGORIES = [
  '都市更新',
  '住宅開發',
  '商業開發',
  '住商混合',
  '公共建設',
]; 