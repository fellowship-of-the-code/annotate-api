const request = require('supertest')
const server = require('../../src/app');

describe('healthcheck', function(){
    it('Deve existir', async function(){
        const response = await request(server).get('/healthcheck')
        expect(response.status).toEqual(200)
    }); 

    it('Deve retornar msg do servidor', async function() {
        const response = await request(server).get('/healthcheck')
        const jResponse = JSON.parse(response.text)
        expect(jResponse.message).toEqual('The server is running')
    })
});