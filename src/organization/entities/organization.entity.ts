import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Organization {
  @PrimaryColumn()
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
}
