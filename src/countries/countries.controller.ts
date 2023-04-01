import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Countries } from './entities/country.entity';
import { CountriesService } from './countries.service';
import { ParseUUIDPipe } from '@nestjs/common';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) { }


  @Post()
  async create(@Body() createCountryDtoenu: CreateCountryDto): Promise<Countries> {
    return this.countriesService.create(createCountryDtoenu);
  }
  

  @Get()
  findAll() {
    return this.countriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countriesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCountryDto: UpdateCountryDto) {
    await this.countriesService.update(id, updateCountryDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.countriesService.remove(id);
  }
}
