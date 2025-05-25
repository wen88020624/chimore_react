// 專案狀態枚舉
export enum ProjectStatus {
  inProgress = 'inProgress',
  complete = 'complete'
}

// 專案接口
export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  statusNote?: string;
  category: string;
  status: ProjectStatus;
  imageUrl?: string;
  landArea?: string;
  buildingFloors?: string;
  units?: string;
  features?: string;
  createdAt: string;
  updatedAt: string;
}

// 創建專案DTO
export interface CreateProjectDto {
  title: string;
  location: string;
  description: string;
  statusNote?: string;
  category?: string;
  status?: ProjectStatus;
  imageUrl?: string;
  landArea?: string;
  buildingFloors?: string;
  units?: string;
  features?: string;
}

// 更新專案DTO
export type UpdateProjectDto = Partial<CreateProjectDto>;

// 用戶接口
export interface User {
  id: number;
  email: string;
  name?: string;
  role?: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

// 登入請求
export interface LoginRequest {
  email: string;
  password: string;
}

// 登入響應
export interface LoginResponse {
  user: User;
  token: string;
}

// API響應包裝器
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
} 