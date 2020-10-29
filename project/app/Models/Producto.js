'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
    comprobante () {
        return this.hasMany('App/Models/Comprobante')
    }
    categoria () {
        return this.belongsTo('App/Models/Categoria')
    }
}

module.exports = Producto
