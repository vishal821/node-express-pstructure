const routes = require('express').Router()
const userController = require('../controllers/user.controller');
const { auth } = require('../middleware/auth');

//api routes call
routes.post('/login', userController.post);
routes.get('/userlist', auth, userController.post);    // to call api with auth verification
module.exports = routes;
