const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

//App Config
app.use(cors())
app.use(express.json())
app.use(routes)

//Port Set
app.listen(3333)

/*
 * Métodos HTTP
 * GET   : Buscar/Listar uma informação do back-end 
 * POST  : Criar uma informação no back-end 
 * PUT   : Alterar uma informação do back-end 
 * DELETE: Deletar uma informação do back-end 
 */