import { IsDefined, IsString, IsNotEmpty } from 'class-validator';

export class StepUpdate {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly name;
}
