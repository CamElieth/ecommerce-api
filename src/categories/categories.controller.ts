import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Categories } from './entities/category.entity';
import { CategoriesService } from './categories.service';
import { ParseUUIDPipe } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }


  @Post()
  async create(@Body() createCategoryDtoenu: CreateCategoryDto): Promise<Categories> {
    return this.categoriesService.create(createCategoryDtoenu);
  }
  

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    await this.categoriesService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.categoriesService.remove(id);
  }
}