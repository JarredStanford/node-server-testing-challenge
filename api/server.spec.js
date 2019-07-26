const request = require('supertest')

const server = require('./server.js')

describe('server', () => {
    it('db environment set to testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('GET /', () => {
        it('should return 200 OK', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })


        it('should return data in JSON', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toMatch(/json/)
                    expect(res.type).toBe('application/json')
                })
        })

    })

    describe('POST /api/auth/register', () => {
        it('should return 201 OK', () => {
            const user = {
                username: "user2wj11w",
                password: "password1",
                department: "department2"
            }

            return request(server)
                .post('/api/auth/register')
                .send(user)
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })
        it('should return user object', () => {
            const user = {
                username: "user2w12q",
                password: "password1",
                department: "department2"
            }
            return request(server)
                .post('/api/auth/register')
                .send(user)
                .then(res => {
                    expect(typeof res.type).toBe('string')
                })
        })
    })



})