import { Test, TestingModule } from '@nestjs/testing';
import { SexsService } from './sexs.service';

describe('SexsService', () => {
  let service: SexsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SexsService],
    }).compile();

    service = module.get<SexsService>(SexsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
