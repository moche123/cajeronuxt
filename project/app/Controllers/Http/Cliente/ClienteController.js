'use strict'

const Cliente = use('App/Models/Cliente')
class ClienteController {
    async index({auth,response}){
        try{ 
            const user =  await auth.getUser()
            const clientes = await Cliente.all()

            return response.json({user,clientes})
        }catch(e){console.log(e)}
    }
    async buscar({params}){
        try{ 
            const {dni} = params;
            
            const cliente = await Cliente.query().where('dni',dni).fetch()
            console.log(cliente[0])
            return cliente
        }catch(e){console.log(e)}
    }
    async create({auth,request,response}){
        const user =  await auth.getUser()
        
        const {nombre,dni} = request.all()
        console.log(nombre,dni)
        const cliente = new Cliente()
        cliente.fill({
            nombre,
            dni
        })
        await cliente.save()
        return response.json({cliente,user});
    }
    
}

module.exports = ClienteController
