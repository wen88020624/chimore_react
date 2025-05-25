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
}
