'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
    ventas(){
        return this.hasMany('App/Models/Venta')
    }
}

module.exports = Cliente
