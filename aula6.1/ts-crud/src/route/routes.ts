import { Router } from 'express';
import UserController from '../controller/userController';
import AccountService from '../service/accountService';

const routes = Router();

let userController = new UserController(new AccountService);

//CRUD
//Restfull
routes.post('/users', userController.create);
routes.get('/users', userController.readAll);
routes.put('/users', userController.update);
routes.delete('/users', userController.delete);
routes.get('/users/:document', userController.read);
// routes.get('/users/?document', userController.read);
// routes.patch('/users', userController.update);

export default routes