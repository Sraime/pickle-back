import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { Codeblock } from './codeblock/codeblock.entity';

@Entity({ name: 'features' })
export class Feature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Codeblock, codeblock => codeblock.feature)
  background: Codeblock[];

  @ManyToOne(() => Codeblock, codeblock => codeblock.feature)
  scenarios: Codeblock[];

  constructor(data: Partial<Feature> = {}) {
    Object.assign(this, data);
  }
}
