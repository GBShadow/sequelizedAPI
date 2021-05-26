const { Router } = require( 'express')
const UsersController = require( './controllers/UsersController.js')

const routes = Router();

routes.post('/users', UsersController.create);
routes.get('/users', UsersController.index);

module.exports = routes;