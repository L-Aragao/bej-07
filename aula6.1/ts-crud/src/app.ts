import express from 'express';
import routes from './route/routes'

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Servidor Online'))