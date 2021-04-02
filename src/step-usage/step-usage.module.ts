import { Module } from '@nestjs/common';
import { StepUsageController } from './step-usage.controller';

@Module({
  controllers: [StepUsageController]
})
export class StepUsageModule {}
