import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './entities/category.entity';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';


@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}
  
  update(id: string, updateCategoryDto: UpdateCategoryDto) {
   return this.categoriesRepository.update(id,updateCategoryDto);
  }
  

  create(createCategoryDto: CreateCategoryDto) {
     return this.categoriesRepository.save(createCategoryDto);
 }

  findAll(): Promise<Categories[]> {
    return this.categoriesRepository.find();
  }

  findOne(id: string): Promise<Categories | null> {
    return this.categoriesRepository.findOneBy({id });
  }

  async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
  }
}
