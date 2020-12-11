import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUser1607651829310 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'photo',
            type: 'varchar',
          },
          {
            name: 'full_name',
            type: 'varchar',
          },
          {
            name: 'phone_number',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'birth_date',
            type: 'timestamp',
          },
          {
            name: 'health_area',
            type: 'boolean',
          },
          {
            name: 'ubs_id',
            type: 'uuid',
          },
          {
            name: 'location_id',
            type: 'uuid',
          },
          {
            name: 'document',
            type: 'uuid',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}
