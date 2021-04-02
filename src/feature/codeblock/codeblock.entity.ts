import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Feature } from '../feature.entity';
import { StepUsage } from './step-usage.entity';

@Entity({ name: 'codeblock' })
export class Codeblock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Feature)
  feature: Feature;

  @OneToMany(() => StepUsage, stepUsage => stepUsage.codeblock)
  givenSteps: StepUsage[];

  @OneToMany(() => StepUsage, stepUsage => stepUsage.codeblock)
  whenSteps: StepUsage[];

  @OneToMany(() => StepUsage, stepUsage => stepUsage.codeblock)
  thenSteps: StepUsage[];

  constructor(data: Partial<Codeblock> = {}) {
    Object.assign(this, data);
  }
}
