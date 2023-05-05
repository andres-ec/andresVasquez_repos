import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Organization } from './organization.entity';
import { Repo } from './repo.entity';

@Entity()
export class Tribe {
  @PrimaryGeneratedColumn()
  id_tribe: number;

  @Column({
    type: 'text',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  status: number;
  
  @ManyToOne(() => Organization, organization => organization.tribes)
  @JoinColumn({ name: "id_organization" })
  organization: Organization;
  
  @OneToMany(() => Repo, repository => repository.tribe)
  repositories: Repo[];
}
