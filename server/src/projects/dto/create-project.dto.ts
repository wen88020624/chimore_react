import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProjectStatus } from '../../../generated/prisma';

export class CreateProjectDto {
  @ApiProperty({
    description: '專案標題',
    example: '企業官網重新設計',
    default: '新專案標題',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: '專案分類',
    example: '網頁設計',
    default: '網頁設計',
    enum: [
      '網頁設計',
      '網頁開發',
      'UI/UX設計',
      '品牌設計',
      '行動應用',
      '系統開發',
    ],
  })
  @IsString()
  category: string;

  @ApiProperty({
    description: '專案內容描述',
    example:
      '為某科技公司重新設計企業官網，包含響應式設計、SEO優化、以及現代化的使用者介面。使用了最新的設計趨勢和技術。',
    default:
      '這是一個新的專案，包含了完整的設計和開發流程。我們使用了最新的技術和設計理念，為客戶提供了優質的解決方案。',
  })
  @IsString()
  content: string;

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
    description: '專案圖片 URL',
    example: 'https://example.com/project-image.jpg',
    default:
      'https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=Project+Image',
    required: false,
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;
}
