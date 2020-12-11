import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateVaccineHours1607651870098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vaccine_hours',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'start_hour',
            type: 'integer',
          },
          {
            name: 'finish_hour',
            type: 'integer',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('vaccine_hours')
  }
}
