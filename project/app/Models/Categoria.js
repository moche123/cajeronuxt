'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {
    productos () {
        return this.hasMany('App/Models/Producto')
    }
    /*facultad () {
        return this.belongsTo('App/Models/Facultad')
    }*/
}

module.exports = Categoria
