const es = require('express')

const server = es();

server.get('/primeiraRota', (req, res) =>{
    res.send("Primeira Rota")
})
server.get('/outraRota', (req, res) =>{
    res.send("Outra Rota")
})

server.listen(3000, () => console.log('Servidor esta Online'))

// Estudar:
// O que é CRUD
// Revisar Interface e Type - DTO em javascript

// Proxima AUla:
// CRUD + Typescript + MVC + Express - montar API