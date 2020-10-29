'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateClienteSchema extends Schema {
  up () {
    this.alter('clientes', (table) => {
      table.string('dni', 8).notNullable().unique().index()   
    })
  }

  down () {
    
  }
}

module.exports = UpdateClienteSchema
