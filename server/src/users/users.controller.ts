import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('用戶管理')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: '創建用戶' })
  @ApiResponse({ status: 201, description: '用戶創建成功' })
  @ApiResponse({ status: 400, description: '請求參數錯誤' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: '獲取所有用戶' })
  @ApiResponse({ status: 200, description: '成功獲取用戶列表' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '根據 ID 獲取用戶' })
  @ApiResponse({ status: 200, description: '成功獲取用戶' })
  @ApiResponse({ status: 404, description: '用戶不存在' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '更新用戶' })
  @ApiResponse({ status: 200, description: '用戶更新成功' })
  @ApiResponse({ status: 404, description: '用戶不存在' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '刪除用戶' })
  @ApiResponse({ status: 200, description: '用戶刪除成功' })
  @ApiResponse({ status: 404, description: '用戶不存在' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
} 