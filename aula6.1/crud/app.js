const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// REST - HTTP - HTML + JSON 
// CRUD -        CREATE, READ, UPDATE, DELETE - mecanicas do banco de dados
// HTTP VERBOS = POST  , GET ,  PUT  , DELETEs

let usuarioPadrao = {nome: 'mario', sobreNome: 'bros'}


app.get('/PrimeiraRota', (req, res) => res.send('Deu bomn') )
app.get('/SegundaRota')
app.post('/criarUsuario', (req, res) => {
    console.log(req)
    res.send(req.body)
    // res.json(req.body.nome)
})

app.put('/atualizarUsuario', (req, res) =>{
    console.log(usuarioPadrao)
    usuarioPadrao.nome = req.body.nome;
    usuarioPadrao.sobreNome = req.body.sobreNome;
    res.send(usuarioPadrao)
})

app.delete('/deletarUsario', (req, res) =>{
    console.log(usuarioPadrao)
    if(usuarioPadrao.nome === req.body.nome)
        usuarioPadrao = {}
    res.send(usuarioPadrao)
})

app.listen(8080, () => console.log('Servidor Online'))