'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductoSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.integer('categoria_id').unsigned().references('id').inTable('categorias')
      table.string('nombre', 80).notNullable()
      table.double('precio').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductoSchema
