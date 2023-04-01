import { Injectable } from '@nestjs/common';
import { CreateSexDto } from './dto/create-sex.dto';
import { UpdateSexDto } from './dto/update-sex.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sex } from './entities/sex.entity';

@Injectable()
export class SexsService {

  constructor(
    @InjectRepository(Sex)
    private sexsRepository: Repository<Sex>,
  ) {}
  
  update(id: string, updateSexDto: UpdateSexDto) {
   return this.sexsRepository.update(id,updateSexDto);
  }
  

  create(createSexDto: CreateSexDto) {
     return this.sexsRepository.save(createSexDto);
 }

  findAll(): Promise<Sex[]> {
    return this.sexsRepository.find();
  }

  findOne(id: string): Promise<Sex | null> {
    return this.sexsRepository.findOneBy({id });
  }

  async remove(id: string): Promise<void> {
    await this.sexsRepository.delete(id);
  }
}
