import { IsDefined, IsString } from 'class-validator';

export class ScenarioUpdate {
  @IsDefined()
  @IsString()
  readonly name;
}
