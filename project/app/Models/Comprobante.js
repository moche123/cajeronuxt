'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comprobante extends Model {
    producto () {
        return this.belongsTo('App/Models/Producto')
    }
    venta () {
        return this.belongsTo('App/Models/Venta')
    }
}

module.exports = Comprobante
