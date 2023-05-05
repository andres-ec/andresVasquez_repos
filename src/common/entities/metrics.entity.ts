import { Entity, Column, OneToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Repo } from './repo.entity';

@Entity()
export class Metrics {
  @PrimaryColumn()
  id_repository: number;

  @Column({
    type: 'float',
    nullable: false,
  })
  coverage: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  bugs: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  vulnerabilities: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  hotspot: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  code_smells: number;

  @OneToOne(() => Repo, repository => repository.metrics)
  @JoinColumn({ name: "id_repository" })
  repository: Repo;
}
