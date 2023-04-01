import { Module } from '@nestjs/common';
import { SexsService } from './sexs.service';
import { SexsController } from './sexs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sex } from './entities/sex.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sex])],
  controllers: [SexsController],
  providers: [SexsService]
})
export class SexsModule {}
