import { Router } from 'express';
import UserController from '../controller/user.controller';
import UserService from '../service/user.service';

const routes = Router();

let userController = new UserController(new UserService);

//CRUD
//Restfull
routes.post('/users', userController.create);
routes.get('/users', userController.readAll);

routes.get('/users/user/', userController.readByDocument);
routes.get('/users/user/:document', userController.readByDocumentParams);
routes.put('/users/user/:document', userController.updateByDocument);
routes.delete('/users/user/:document', userController.deleteByDocument);
// routes.get('/users/?document', userController.read);
// routes.patch('/users', userController.update);

export default routes