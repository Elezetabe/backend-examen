import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'dia_atencions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('especialista_id').unsigned().references('id').inTable('especialistas')
      table.string('dia').notNullable()
      table.string('hora_inicio').notNullable()
      table.string('hora_fin').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
