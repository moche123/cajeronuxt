'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string('nombre', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClienteSchema
