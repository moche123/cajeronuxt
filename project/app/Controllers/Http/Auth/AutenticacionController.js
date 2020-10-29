'use strict'
const User = use('App/Models/User')
class AutenticacionController {
    async register({ request, auth, response }) {
        const userData = request.only(['username','email', 'password','type'])
        
        try {
         
          const user = await User.create(userData)
          
          const token = await auth.generate(user)
    
          return response.json({
            status: 'success',
            data: token
          })  
    
        } catch(error) {
    
          return response.status(400).json({
            status: 'error',
            message: 'Hubo un problema al crear al usuario, intente nuevamente'
          })  
    
        }
    
    }
    
    async login({ request, auth, response }) {
        const { email, password} = request.only(['email', 'password'])
       
        
        try {
          const token = await auth.attempt(email,password)
         
          return response.json({
            status: 'success',
            data: token
          })  
    
        } catch(error) {
    
          return response.status(400).json({
            status: 'error',
            message: 'Correo/Contraseña incorrectos.'
          })  
    
        }
    }
    
    async me({ auth, response }) {
       
      
        return response.json({
          status: 'success',
          data: auth.user
        })
    }
  
}

module.exports = AutenticacionController