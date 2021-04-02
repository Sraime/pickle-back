import { Test, TestingModule } from '@nestjs/testing';
import { CodeblockController } from './codeblock.controller';

describe('CodeblockController', () => {
  let controller: CodeblockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodeblockController],
    }).compile();

    controller = module.get<CodeblockController>(CodeblockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
