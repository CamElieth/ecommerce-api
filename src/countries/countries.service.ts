import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Countries } from './entities/country.entity';
import { UpdateCountryDto } from './dto/update-country.dto';
import { CreateCountryDto } from './dto/create-country.dto';


@Injectable()
export class CountriesService {

  constructor(
    @InjectRepository(Countries)
    private countriesRepository: Repository<Countries>,
  ) {}
  
  update(id: string, updateCountryDto: UpdateCountryDto) {
   return this.countriesRepository.update(id,updateCountryDto);
  }
  

  create(createCountryDto: CreateCountryDto) {
     return this.countriesRepository.save(createCountryDto);
 }

  findAll(): Promise<Countries[]> {
    return this.countriesRepository.find();
  }

  findOne(id: string): Promise<Countries | null> {
    return this.countriesRepository.findOneBy({id });
  }

  async remove(id: string): Promise<void> {
    await this.countriesRepository.delete(id);
  }
}