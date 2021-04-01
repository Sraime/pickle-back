import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'features' })
export class Feature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  constructor(data: Partial<Feature> = {}) {
    Object.assign(this, data);
  }
}
