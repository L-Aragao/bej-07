const { Router } = require('express');
const { calculaFrete, cepInfo, calculaPrazo } = require('../controller/logistic.controller');

const routes = Router();

routes.get('/frete/:cep',calculaFrete);
routes.get('/endereco/:cep', cepInfo);
routes.get('/prazo/:cep', calculaPrazo)

module.exports = routes;

