import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: '電子郵件',
    example: 'admin@chimore.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: '密碼',
    example: 'admin123',
  })
  @IsString()
  password: string;
} 