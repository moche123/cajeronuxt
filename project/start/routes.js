'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  //Controladores de autorizacion
  Route.post('login', 'Auth/AutenticacionController.login')
  Route.post('register', 'Auth/AutenticacionController.register')
  Route.get('me', 'Auth/AutenticacionController.me').middleware(['auth'])
  //Categorias
  Route.get('categorias','Categoria/CategoriaController.index').middleware(['auth']);
  Route.post('categorias','Categoria/CategoriaController.create').middleware(['auth']);
  Route.patch('categorias/:id', 'Categoria/CategoriaController.update').middleware(['auth']);
  Route.delete('categorias/:id', 'Categoria/CategoriaController.destroy').middleware(['auth']);

  //Productos
  Route.get('productos','Producto/ProductoController.index').middleware(['auth']);
  Route.get('productos/:id','Producto/ProductoController.segun').middleware(['auth']);
  Route.post('productos','Producto/ProductoController.create').middleware(['auth']);
  Route.patch('productos/:id', 'Producto/ProductoController.update').middleware(['auth']);
  Route.delete('productos/:id', 'Producto/ProductoController.destroy').middleware(['auth']);
  //CLientes
  Route.get('clientes','Cliente/ClienteController.index').middleware(['auth']);
  Route.get('clientes/:dni','Cliente/ClienteController.buscar').middleware(['auth']);
  Route.post('clientes','Cliente/ClienteController.create').middleware(['auth']);
  //Venta
  Route.get('ventas','Venta/VentaController.index').middleware(['auth']);
  Route.post('ventas','Venta/VentaController.create').middleware(['auth']);
  Route.patch('ventas/:id','Venta/VentaController.update').middleware(['auth']);
  Route.delete('ventas/:id', 'Venta/VentaController.destroy').middleware(['auth']);
  //Comprobante
  Route.get('comprobantes','Comprobante/ComprobanteController.index').middleware(['auth']);
  Route.post('comprobantes','Comprobante/ComprobanteController.create').middleware(['auth']);
  Route.delete('comprobantes/:id', 'Comprobante/ComprobanteController.destroy').middleware(['auth']);
}).prefix('api')
