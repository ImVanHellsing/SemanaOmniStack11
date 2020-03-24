const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

//Routes ONGs
routes.get('/ongs',OngController.index)
routes.post('/ongs', OngController.create)

//Routes Incidents
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

//Routes Incidents
routes.get('/profile', ProfileController.index)

//Routes Login
routes.post('/session', SessionController.create)

module.exports = routes;