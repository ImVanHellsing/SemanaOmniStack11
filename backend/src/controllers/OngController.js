const connection = require('../database/connection')
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {

    //Listar ONGs do DB
    async index(req, res){

        const ongs = await connection('ongs').select('*')
    
        return res.json(ongs)
    },

    //Criar ONG no DB
    async create(req, res){

        const { name, email, whatsapp, city, uf } = req.body
        const id = generateUniqueId()
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({ id })
    }
}