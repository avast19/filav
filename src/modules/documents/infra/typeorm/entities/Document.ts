import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('documents')
class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  number: string

  @Column()
  type: 'CPF' | 'RG'

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date
}

export default Document
