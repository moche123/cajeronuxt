'use strict'
const SourceService = use("App/Services/SourceService")
const Producto = use('App/Models/Producto')

class ProductoController {
    async index({auth,response}){
        try{ 
            const user =  await auth.getUser()
            const productos = await Producto.all()
            return response.json({user,productos})
        }catch(e){console.log(e)}
    }
    async segun({auth,params,response}){
        try{ 
            const user =  await auth.getUser()
            const {id} = params;
            
            const productos = await Producto.query().where('categoria_id',id).fetch()
            return response.json({user,productos})
        }catch(e){console.log(e)}
    }
    async create({auth,request,response}){
        const user =  await auth.getUser()
        const {nombre,precio,categoria_id,stock} = request.all()
        const producto = new Producto()
        producto.fill({
            nombre,
            precio,
            categoria_id,
            stock,
            created_at:Date.now(),
            updated_at:Date.now()
        })
        await producto.save()
        return response.json({producto,user});
    }
    async destroy({auth,params,response}) {
        const user = await auth.getUser();
        const {id} = params;
        const producto = await Producto.find(id)
        SourceService.verificarExistencia(producto)
        await producto.delete()
        return response.json({producto,user});
    }
    async update({auth,params,request,response}){  
        const user = await auth.getUser();
        const {id} = params;   
        const producto = await Producto.find(id);
        SourceService.verificarExistencia(producto)
        producto.merge({nombre:request.body.nombre,precio:request.body.precio,updated_at:Date.now(),stock:request.body.stock});
        await producto.save();
        return response.json({producto,user}); 
    }
}

module.exports = ProductoController
