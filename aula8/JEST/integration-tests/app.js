const express = require('express');
const calculadora = require('./calculadora');
const app = express();

app.use(express.json());

//Healthcheck
app.get('/calculadora', (req, res) =>  res.json({ message: 'serviço funcionando' }));

//CalculadoraSoma
app.get('/calculadora/soma/:valor1/:valor2', (req, res) => {
    const valor1 = parseInt(req.params.valor1);
    const valor2 = parseInt(req.params.valor2);
    console.log("Valores: ", valor1, valor2)
    res.json({ resultado: calculadora.sum(valor1, valor2) });
})

//So inicia o servidor se o modulo que chama é o main node bla.js
if(require.main === module) {
    app.listen(3000, () => console.log('Service is online'))
}

module.exports = app