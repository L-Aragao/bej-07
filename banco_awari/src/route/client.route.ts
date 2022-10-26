import { Router } from "express";
import ClientController from '../controller/client.controller';
import ClientService from "../service/client.service";

const routes = Router();
const clientController = new ClientController(new ClientService);


routes.get('/clients', clientController.read);
routes.get('/clients/client', clientController.readClient); //?documento
routes.get('/clients/client/:documento', clientController.readClient);

routes.put('/clients', clientController.update);
routes.put('/clients/client', clientController.updateClient);

routes.post('/clients/', clientController.create);
routes.post('/clients/client', clientController.createClient);

routes.delete('/clients/', clientController.delete);
routes.delete('/clients/client', clientController.deleteClient);

export default routes;