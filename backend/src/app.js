const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const { errors } = require('celebrate')
const app = express()

//App Config
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

//Port Set
module.exports = app

/*
 * Métodos HTTP
 * GET   : Buscar/Listar uma informação do back-end 
 * POST  : Criar uma informação no back-end 
 * PUT   : Alterar uma informação do back-end 
 * DELETE: Deletar uma informação do back-end 
 */