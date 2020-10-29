'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComprobanteSchema extends Schema {
  up () {
    this.create('comprobantes', (table) => {
      table.increments()
      table.date('fecha', 80).notNullable()
      table.double('subtotal').notNullable()
      table.integer('producto_id').unsigned().references('id').inTable('productos')
      table.integer('venta_id').unsigned().references('id').inTable('ventas')
      table.timestamps()
    })
  }

  down () {
    this.drop('comprobantes')
  }
}

module.exports = ComprobanteSchema
