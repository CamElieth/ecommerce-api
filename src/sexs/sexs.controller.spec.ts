import { Test, TestingModule } from '@nestjs/testing';
import { SexsController } from './sexs.controller';
import { SexsService } from './sexs.service';

describe('SexsController', () => {
  let controller: SexsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SexsController],
      providers: [SexsService],
    }).compile();

    controller = module.get<SexsController>(SexsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
