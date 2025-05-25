import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@ApiTags('專案管理')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @ApiOperation({ summary: '建立新專案' })
  @ApiResponse({ status: 201, description: '專案建立成功' })
  @ApiResponse({ status: 400, description: '請求資料格式錯誤' })
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @ApiOperation({ summary: '取得所有專案' })
  @ApiQuery({
    name: 'status',
    required: false,
    description: '根據狀態篩選 (inProgress | complete)',
  })
  @ApiQuery({ name: 'category', required: false, description: '根據分類篩選' })
  @ApiResponse({ status: 200, description: '成功取得專案列表' })
  @Get()
  findAll(
    @Query('status') status?: string,
    @Query('category') category?: string,
  ) {
    if (status) {
      return this.projectsService.findByStatus(status);
    }
    if (category) {
      return this.projectsService.findByCategory(category);
    }
    return this.projectsService.findAll();
  }

  @ApiOperation({ summary: '取得單一專案' })
  @ApiParam({ name: 'id', description: '專案 UUID' })
  @ApiResponse({ status: 200, description: '成功取得專案' })
  @ApiResponse({ status: 404, description: '專案不存在' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @ApiOperation({ summary: '更新專案' })
  @ApiParam({ name: 'id', description: '專案 UUID' })
  @ApiResponse({ status: 200, description: '專案更新成功' })
  @ApiResponse({ status: 404, description: '專案不存在' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @ApiOperation({ summary: '刪除專案' })
  @ApiParam({ name: 'id', description: '專案 UUID' })
  @ApiResponse({ status: 200, description: '專案刪除成功' })
  @ApiResponse({ status: 404, description: '專案不存在' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}
