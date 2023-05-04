const express = require('express')
const server = express()
const games = require('./src/data/games.json')
const produtoras = require('./src/data/produtoras.json')


server.get('/games', (req,res)=>{
    res.json(games)
})

server.get('/produtoras', (req, res)=>{
    res.json(produtores)
})

server.listen(8080, () => {console.log ('Rodando na porta 8080')})