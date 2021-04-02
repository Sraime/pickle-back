import { Codeblock } from 'src/feature/codeblock/codeblock.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Step } from '../step/step.entity';

@Entity({ name: 'step-usage' })
export class StepUsage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Codeblock)
  codeblock: Codeblock;

  @ManyToOne(() => Step)
  step: Step;

  constructor(data: Partial<StepUsage> = {}) {
    Object.assign(this, data);
  }
}
