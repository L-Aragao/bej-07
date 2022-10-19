const express = require('express');
const freteRoutes = require('./route/frente.route');

const app = express();

app.use(express.urlencoded({ extended: true })); // url com encoded para todos os verbos e opçoes de url (query, params)
app.use(express.json());
app.use(freteRoutes);

app.listen(8080, () => console.log("Servidor Online: localhost:8080/"));