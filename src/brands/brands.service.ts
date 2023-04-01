import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brands } from './entities/brand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {

  constructor(
    @InjectRepository(Brands)
    private brandsRepository: Repository<Brands>,
  ){}

  update(id: string, updateBrandDto: UpdateBrandDto) {
    return this.brandsRepository.update(id,updateBrandDto);
   }
   

  create(CreateBrandDto: CreateBrandDto) {
    return this.brandsRepository.save(CreateBrandDto);
  }

  findAll(): Promise<Brands[]> {
    return this.brandsRepository.find();
  }

  findOne(id: string): Promise<Brands | null> {
    return this.brandsRepository.findOneBy({id});
    
  }

  async remove(id:string): Promise<void> {
    await this.brandsRepository.delete(id);

  }
}
