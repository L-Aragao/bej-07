import { Router } from "express";
import AccountController from '../controller/account.controller';
import AccountService from "../service/account.service";

const routes = Router();
const accountController = new AccountController(new AccountService);

routes.get('/accounts', accountController.read);
routes.get('/accounts/account', accountController.readAccount);
routes.get('/accounts/account/balance', accountController.readBalance);

routes.put('/accounts/account/deposit', accountController.updateDeposit);
routes.put('/accounts/account/withdraw', accountController.updateWithdraw);

routes.post('/accounts', accountController.create);
routes.post('/accounts/account', accountController.createAccount);
routes.post('/acoounts/account/transfer', accountController.createTransfer);


export default routes;