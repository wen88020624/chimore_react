import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: '用戶電子郵件', example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: '用戶姓名', example: '張三', required: false })
  @IsOptional()
  @IsString()
  name?: string;
}