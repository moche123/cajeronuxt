'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.increments()
      table.string('denominacion', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriaSchema
