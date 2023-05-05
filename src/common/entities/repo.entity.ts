import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Tribe } from './tribe.entity';
import { Metrics } from './metrics.entity';

@Entity({ name: 'repository' })
export class Repo {
  @PrimaryGeneratedColumn()
  id_repository: number;

  @Column({
    type: 'text',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  state: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  create_time: Date;

  @Column({
    type: 'text',
    nullable: false,
  })
  status: string;

  @ManyToOne(() => Tribe, tribe => tribe.repositories)
  @JoinColumn({ name: "id_tribe" })
  tribe: Tribe;

  @OneToOne(() => Metrics, metrics => metrics.repository)
  metrics: Metrics;
}
