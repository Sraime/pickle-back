import { Test, TestingModule } from '@nestjs/testing';
import { CodeblockService } from './codeblock.service';

describe('CodeblockService', () => {
  let service: CodeblockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodeblockService],
    }).compile();

    service = module.get<CodeblockService>(CodeblockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
