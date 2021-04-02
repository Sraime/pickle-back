import { IsDefined, IsString, IsNotEmpty } from 'class-validator';

export class StepUsageCreateNoStep {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly name;
}
