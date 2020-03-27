const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {

    beforeEach(async () => {
        //Rollback limpa o banco de testes para futuros testes
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })
    
    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ONG', async() => {
        const res = await request(app)
            .post('/ongs')
            .send({
                name    : "Jacson",
                email   : "contato@bla.com",
                whatsapp: "88888888888",
                city    : "Rio de Janeiro",
                uf      : "RJ"
            })

        expect(res.body).toHaveProperty('id')
        expect(res.body.id).toHaveLength(8)
    })
})