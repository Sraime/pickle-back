import { IsDefined, IsString, IsNotEmpty } from 'class-validator';

export class FeatureCreate {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly name;
}
