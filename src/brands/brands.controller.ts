import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brands } from './entities/brand.entity';
import { ParseUUIDPipe } from '@nestjs/common';


@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  async create(@Body() createBrandDtoenu: CreateBrandDto): Promise<Brands> {
    return this.brandsService.create(createBrandDtoenu);
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    await this.brandsService.update(id, updateBrandDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.brandsService.remove(id);
  }
}
