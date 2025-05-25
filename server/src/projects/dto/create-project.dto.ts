import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectStatus } from '../../../generated/prisma';

export class CreateProjectDto {
  @ApiProperty({
    description: '專案標題',
    example: '新北市五股區中興段777地號',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: '專案位置/地址',
    example: '(原更動捷運系統機廠)73-4地號等9筆(原5號)土地',
  })
  @IsString()
  location: string;

  @ApiProperty({
    description: '專案描述',
    example: '本案位於新北市五股區中興段，土地面積約為X平方公尺，建築規劃為地上X層、地下X層的集合住宅，提供約X戶的優質住宅單位。專案特色包括完善的公共設施、綠化空間及智能家居設計。',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: '專案狀態說明',
    example: '都市更新事業計畫審議會版',
    required: false,
  })
  @IsOptional()
  @IsString()
  statusNote?: string;

  @ApiProperty({
    description: '專案分類',
    example: '都市更新',
    default: '都市更新',
    enum: ['都市更新', '住宅開發', '商業開發', '住商混合', '公共建設'],
  })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({
    description: '專案狀態',
    enum: ProjectStatus,
    example: ProjectStatus.inProgress,
    default: ProjectStatus.inProgress,
    required: false,
  })
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @ApiProperty({
    description: '專案主要圖片 URL',
    example: '/projectInHome1.711722d8.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({
    description: '土地面積',
    example: '1,500平方公尺',
    required: false,
  })
  @IsOptional()
  @IsString()
  landArea?: string;

  @ApiProperty({
    description: '建築樓層',
    example: '地上15層、地下3層',
    required: false,
  })
  @IsOptional()
  @IsString()
  buildingFloors?: string;

  @ApiProperty({
    description: '住宅單位數',
    example: '120戶',
    required: false,
  })
  @IsOptional()
  @IsString()
  units?: string;

  @ApiProperty({
    description: '專案特色',
    example: '完善的公共設施、綠化空間及智能家居設計',
    required: false,
  })
  @IsOptional()
  @IsString()
  features?: string;
}
