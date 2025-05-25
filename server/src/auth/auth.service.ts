import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  // 簡化的登入邏輯（實際應該使用資料庫和加密）
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    
    // 硬編碼的管理員帳號（實際應該從資料庫查詢）
    if (email === 'admin@chimore.com' && password === 'admin123') {
      return {
        user: {
          id: 1,
          email,
          name: '管理員',
          role: 'admin',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        token: 'mock-admin-token-' + Date.now(),
        message: '登入成功',
      };
    }
    
    throw new UnauthorizedException('帳號或密碼錯誤');
  }
} 