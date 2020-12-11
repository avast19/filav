import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm'

const listForeigKeysUser = [
  new TableForeignKey({
    name: 'UserUbs',
    columnNames: ['ubs_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'ubs',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  }),
  new TableForeignKey({
    name: 'UserDocument',
    columnNames: ['document'],
    referencedColumnNames: ['id'],
    referencedTableName: 'documents',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  }),
  new TableForeignKey({
    name: 'UserLocalization',
    columnNames: ['localization_id'],
    referencedColumnNames: ['id'],
    referencedTableName: 'localizations',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  }),
]

export class CreateRelations1607658462603 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createForeignKeys('users', listForeigKeysUser)
    queryRunner.createForeignKey(
      'ubs',
      new TableForeignKey({
        name: 'UbsLocation',
        columnNames: ['location_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'locations',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    )
    queryRunner.createForeignKey(
      'pharmacys',
      new TableForeignKey({
        name: 'PharmacyLocation',
        columnNames: ['location_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'locations',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropForeignKeys('users', listForeigKeysUser)
    queryRunner.dropForeignKey('ubs', 'UbsLocation')
  }
}
