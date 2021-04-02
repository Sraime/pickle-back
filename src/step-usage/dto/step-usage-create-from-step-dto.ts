import { IsDefined, IsString, IsNotEmpty } from 'class-validator';

export class StepUsageCreateFromStep {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly stepId;
}
