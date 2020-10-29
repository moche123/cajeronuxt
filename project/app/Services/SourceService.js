const RecursoNoEncontradoException = use('App/Exceptions/RecursoNoEncontradoException')

class SourceService{
    verificarExistencia(recurso){
        if(!recurso){
            throw new RecursoNoEncontradoException();
        }
    }
}
module.exports = new SourceService();