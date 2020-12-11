import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Exclude } from 'class-transformer'

@Entity('administrators')
class Administrator {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  full_name: string

  @Column()
  email: string

  @Column()
  @Exclude()
  password: string

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date
}

export default Administrator
