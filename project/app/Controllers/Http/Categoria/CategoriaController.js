'use strict'

const SourceService = use("App/Services/SourceService")

const Categoria = use('App/Models/Categoria')
class CategoriaController {
    async index({auth,response}){
        try{ 
            const user =  await auth.getUser()
            const categorias = await Categoria.all()
            return response.json({user,categorias})
        }catch(e){console.log(e)}
    }
    async create({auth,request,response}){
        const user =  await auth.getUser()
        const {denominacion} = request.all()
        const categoria = new Categoria()
        categoria.fill({
            denominacion,
        })
        await categoria.save()
        return response.json({categoria,user});
    }
    async destroy({auth,params,response}) {
        const user = await auth.getUser();
        const {id} = params;
        const categoria = await Categoria.find(id)
        SourceService.verificarExistencia(categoria)
        await categoria.delete()
        return response.json({categoria,user});
    }
    async update({auth,params,request,response}){
        
        const user = await auth.getUser();
        const {id} = params;
   
        const categoria = await Categoria.find(id);
        
        SourceService.verificarExistencia(categoria)
        categoria.merge({denominacion:request.body.denominacion,updated_at:Date.now()});
        await categoria.save();
        return response.json({categoria,user}); 
    }
}

module.exports = CategoriaController
