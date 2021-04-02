import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity({ name: 'step' })
export class Step {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  constructor(data: Partial<Step> = {}) {
    Object.assign(this, data);
  }
}
