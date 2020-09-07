const request = require('supertest')
const server = require('../../src/app')

describe('app:notfound', function() {
    it('should return 404 response when route not found', async function () {
        const response = await request(server).get('/not_found')
        expect(response.status).toEqual(404)
    })
    
    it('should return an json response of route was not found', async function () {
        const response = await request(server).get('/not_found')
        const jsonResponse = JSON.parse(response.text)
        expect(jsonResponse.message).toEqual('Route was not found')
    })
})