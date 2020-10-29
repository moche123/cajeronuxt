'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Venta extends Model {
    cliente () {
        return this.belongsTo('App/Models/Cliente')
    }
    usuario () {
        return this.belongsTo('App/Models/User')
    }
    comprobantes () {
        return this.hasMany('App/Models/Comprobante')
    }
}

module.exports = Venta
