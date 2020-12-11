import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('locations')
class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  longitude: string

  @Column()
  latitude: string

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date
}

export default Location
