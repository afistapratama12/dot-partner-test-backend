const request = require('supertest')


const app = require('../app')


describe('POST /login', function() {
    it(`should status 200, success login`, function (done) {
        const body = {
            email : "admin@mail.com",
            pasword : "admin"
        }

        request(app)
        .post("/login")
        .send(body)
        .end((err, res) => {
            if (err) done(err)

            expect(res.statusCode).toEqual(200)
            expect(typeof res.body).toEqual("object")
            expect(res.body).toHaveProperty('access_token')
            expect(res.body).toEqual({
                access_token : expect.any(String)
            })

            done()
        })
    })

    it(`should status 401, invalid for password / not found`, function (done) {
        const body = {
            email : "admin@mail.com",
            pasword : "sadsadsadsadfefasdas"
        }

        request(app)
        .post("/login")
        .send(body)
        .end((err, res) => {
            if (err) done(err)

            expect(res.statusCode).toEqual(401)
            expect(typeof res.body).toEqual('object')
            expect(res.body).toHaveProperty('message')
            expect(res.body.message).toEqual('Invalid email / password')
            
            done()
        })
    })

    it(`should status 400, email and pass must be filled`, function (done) {
        const body = {
            email : "",
            pasword : ""
        }

        request(app)
        .post("/login")
        .send(body)
        .end((err, res) => {
            if (err) done(err)

            expect(res.statusCode).toEqual(400)
            expect(typeof res.body).toEqual('object')
            expect(res.body).toHaveProperty('message')
            expect(res.body.message).toEqual('Email / Password must be filled')

            done()
        })
    })
})