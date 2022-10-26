//teste do app.js
const supertest = require('supertest'); //infere que o teste sera de integraçao 
const app = require('./app');

test('GET /calculadora/soma/10/5', async () => {
    const response = await supertest(app).get('/calculadora/soma/10/5');
    expect(response.statusCode).toEqual(200)
    expect(response.body.resultado).toEqual(15);
})