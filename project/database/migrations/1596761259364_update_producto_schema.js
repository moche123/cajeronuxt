'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateProductoSchema extends Schema {
  up () {
    this.alter('productos', (table) => {
      table.double('stock').notNullable()
    })
  }

  down () {
    this.table('update_productos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UpdateProductoSchema
