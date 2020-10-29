'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class RecursoNoEncontradoException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (_error,{response}) {
    return response.status(404).json({
      mensaje : "Recurso no existente"
    })
  }
}

module.exports = RecursoNoEncontradoException
