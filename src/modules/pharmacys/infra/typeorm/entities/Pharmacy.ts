import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm'

import Location from '@modules/localizations/infra/typeorm/entities/Location'

@Entity('pharmacys')
class Pharmacy {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  location_id: string

  @OneToOne(() => Location, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'location_id' })
  location: Location

  @Column()
  city: string

  @Column()
  uf: string

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date
}

export default Pharmacy
