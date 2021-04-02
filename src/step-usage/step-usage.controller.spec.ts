import { Test, TestingModule } from '@nestjs/testing';
import { StepUsageController } from './step-usage.controller';

describe('StepUsageController', () => {
  let controller: StepUsageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StepUsageController],
    }).compile();

    controller = module.get<StepUsageController>(StepUsageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
