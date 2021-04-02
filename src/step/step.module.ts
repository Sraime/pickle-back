import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Step } from './step.entity';
import { StepController } from './step.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Step])],
  controllers: [StepController],
})
export class StepModule {}
