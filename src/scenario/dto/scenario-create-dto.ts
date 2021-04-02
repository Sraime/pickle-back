import { IsDefined, IsString, IsNotEmpty } from 'class-validator';

export class ScenarioCreate {
  @IsDefined()
  @IsString()
  readonly name;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly feature;
}
