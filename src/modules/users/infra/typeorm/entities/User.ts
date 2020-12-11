import Document from '@modules/documents/infra/typeorm/entities/Document'
import Location from '@modules/localizations/infra/typeorm/entities/Location'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  photo: string | null

  @Column()
  full_name: string

  @Column()
  location_id?: string | null

  @OneToOne(() => Location)
  @JoinColumn({ name: 'location_id' })
  location: Location

  @Column()
  phone_number: string

  @Column()
  birth_date: Date

  @OneToOne(() => Document, { cascade: true, eager: true })
  @JoinColumn()
  document: Document

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date
}

export default User
