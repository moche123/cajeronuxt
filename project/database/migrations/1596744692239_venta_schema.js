'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VentaSchema extends Schema {
  up () {
    this.create('ventas', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.double('total').notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes')
      table.timestamps()
    })
  }

  down () {
    this.drop('ventas')
  }
}

module.exports = VentaSchema
