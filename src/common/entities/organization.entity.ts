import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tribe } from './tribe.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id_organization: number;

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

  @OneToMany(() => Tribe, tribe => tribe.organization)
  tribes: Tribe[];
}
