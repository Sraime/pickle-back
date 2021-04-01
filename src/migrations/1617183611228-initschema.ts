import { MigrationInterface, QueryRunner } from 'typeorm';

export class initschema1617183611228 implements MigrationInterface {
  name = 'initschema1617183611228';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "features" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5c1e336df2f4a7051e5bf08a941" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "features"`);
  }
}
