'use strict'
const SourceService = use("App/Services/SourceService")
const Comprobante = use("App/Models/Comprobante")
class ComprobanteController {
    async index({auth,response}){
        try{ 
            const user =  await auth.getUser()
            const comprobantes = await Comprobante.all()
            
            return response.json({comprobantes,user})

        }catch(e){console.log(e)}
    }
    async create({auth,request,response}){
        const user =  await auth.getUser()
        const {cantidad,producto_id,venta_id} = request.all()
        console.log(cantidad," ",producto_id," ",venta_id)
        const comprobante = new Comprobante()
        comprobante.fill({
            cantidad,
            producto_id,
            venta_id
           
        })
        await comprobante.save()
        return response.json({comprobante,user});
    }
    async destroy({auth,params,response}) {
        const user = await auth.getUser();
        const {id} = params;
        const comprobante = await Comprobante.find(id)
        SourceService.verificarExistencia(comprobante)
        await comprobante.delete()
        return response.json({comprobante,user});
    }
}

module.exports = ComprobanteController
