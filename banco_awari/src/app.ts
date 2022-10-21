import express, { Router } from 'express';
import clientRoute from './route/client.route';
import accountRoute from './route/account.route';

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(clientRoute);
app.use(accountRoute);

app.listen(3333, () => console.log('O servidor esta Online'));