'use strict'


const SourceService = use("App/Services/SourceService")
const Venta = use("App/Models/Venta")


class VentaController {
    async index({auth,response}){
        try{ 
            const user =  await auth.getUser()
            const ventas = await Venta.all()
            
            return response.json({ventas,user})

        }catch(e){console.log(e)}
    }
    async create({auth,request,response}){
        const user =  await auth.getUser()
        const {cliente_id} = request.all()
        const venta = new Venta()
        venta.fill({
            cliente_id,
            user_id: user.id,
            created_at:Date.now(),
            total:0.0
        })
        await venta.save()
        return response.json({venta});
    }
    async destroy({auth,params,response}) {
        const user = await auth.getUser();
        const {id} = params;
        const venta = await Venta.find(id)
        SourceService.verificarExistencia(venta)
        await venta.delete()
        return response.json({venta,user});
    }
    async update({auth,params,request,response}){
        
        const user = await auth.getUser();
        const {id} = params;
   
        const venta = await Venta.find(id);
        
        SourceService.verificarExistencia(venta)
        venta.merge({total:request.body.total,updated_at:Date.now()});
        await venta.save();
        return response.json({venta,user}); 
    }
}

module.exports = VentaController
