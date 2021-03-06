import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateOrdersProducts1597802338672 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'orders_products',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'product_id',
						type: 'uuid',
					},
					{
						name: 'order_id',
						type: 'uuid',
					},
					{
						name: 'price',
						type: 'decimal',
						precision: 10,
						scale: 2,
					},
					{
						name: 'quantity',
						type: 'int',
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
				foreignKeys: [
					{
						name: 'product_orders_products_fk',
						referencedTableName: 'products',
						referencedColumnNames: ['id'],
						columnNames: ['product_id'],
					},
					{
						name: 'order_orders_products_fk',
						referencedTableName: 'orders',
						referencedColumnNames: ['id'],
						columnNames: ['order_id'],
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('orders_products');
	}
}
