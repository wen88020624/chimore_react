import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  // 建立專案
  async create(createProjectDto: CreateProjectDto) {
    return this.prisma.project.create({
      data: createProjectDto,
    });
  }

  // 取得所有專案
  async findAll() {
    return this.prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // 根據 ID 取得單一專案
  async findOne(id: string) {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      throw new NotFoundException(`專案 ID ${id} 不存在`);
    }

    return project;
  }

  // 更新專案
  async update(id: string, updateProjectDto: UpdateProjectDto) {
    await this.findOne(id); // 確認專案存在

    return this.prisma.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  // 刪除專案
  async remove(id: string) {
    await this.findOne(id); // 確認專案存在

    return this.prisma.project.delete({
      where: { id },
    });
  }

  // 根據狀態篩選專案
  async findByStatus(status: string) {
    return this.prisma.project.findMany({
      where: { status: status as any },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // 根據分類篩選專案
  async findByCategory(category: string) {
    return this.prisma.project.findMany({
      where: { category },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // 創建都市更新案例範例資料
  async createSampleUrbanRenewalProjects() {
    const sampleProjects = [
      {
        title: '新北市五股區中興段777地號',
        location: '(原更動捷運系統機廠)73-4地號等9筆(原5號)土地',
        description: '本案位於新北市五股區中興段，土地面積約為1,500平方公尺，建築規劃為地上15層、地下3層的集合住宅，提供約120戶的優質住宅單位。專案特色包括完善的公共設施、綠化空間及智能家居設計。',
        statusNote: '都市更新事業計畫審議會版',
        category: '都市更新',
        imageUrl: '/projectInHome1.711722d8.jpg',
        landArea: '1,500平方公尺',
        buildingFloors: '地上15層、地下3層',
        units: '120戶',
        features: '完善的公共設施、綠化空間及智能家居設計',
      },
      {
        title: '擬訂新北市中和區健康段954地號等7筆土地',
        location: '新北市中和區',
        description: '本案位於新北市中和區健康段，土地面積約為2,200平方公尺，規劃為地上18層、地下4層的複合式建築，包含住宅單位與商業空間。專案亮點為便利的交通位置、現代化設施及舒適的生活環境。',
        statusNote: '都市更新事業計畫及都市設計審議案審議會',
        category: '都市更新',
        imageUrl: '/projectInHome2.1a34b004.jpg',
        landArea: '2,200平方公尺',
        buildingFloors: '地上18層、地下4層',
        units: '150戶',
        features: '便利的交通位置、現代化設施及舒適的生活環境',
      },
    ];

    const createdProjects = [];
    for (const project of sampleProjects) {
      const created = await this.prisma.project.create({
        data: project,
      });
      createdProjects.push(created);
    }

    return createdProjects;
  }
}
