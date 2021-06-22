const request = require('supertest')

const app = require('../app')

const { genToken } = require("../helper/jwt")
const { User } = require('../models')

// belum selesai

let idCreate = 0

describe(`GET /passwords`, function() {
    let access_token = null

    beforeAll(done => {
        User.findOne({ where : {email : "admin@mail.com"}})
        .then(user => {
            const payload = {
                id : user.id,
                email : user.email,
            }

            access_token = genToken(payload)

            done()
        })
    })


    it ("should status 200 fetch all passwords" , function (done) {
        request(app)
        .get("/passwords")
        .set("access_token", access_token)
        .end((err, res) => {
            if(err) done(err)

            expect(res.statusCode).toEqual(200)
            expect(Array.isArray(res.body)).toEqual(true)
            expect(typeof res.body[0]).toEqual('object')
            expect(res.body[0]).toHaveProperty('id')
            expect(res.body[0]).toHaveProperty('websiteUrl')
            expect(res.body[0]).toHaveProperty('password')
            expect(res.body[0]).toHaveProperty('UserId')

            done()
        })
    })
})

describe(`POST /passwords`, function() {
    let access_token = null

    beforeAll(done => {
        User.findOne({ where : {email : "admin@mail.com"}})
        .then(user => {
            const payload = {
                id : user.id,
                email : user.email,
            }

            access_token = genToken(payload)

            done()
        })
    })

    it ("should status 201 success create passwords" , function (done) {
        const body = {
            websiteUrl : "google.google",
            password : "admin",
        }

        request(app)
        .post("/passwords")
        .set("access_token", access_token)
        .send(body)
        .end((err, res) => {
            if(err) done(err)

            idCreate = res.body.id
            expect(res.statusCode).toEqual(201)
            // expect(Array.isArray(res.body)).toEqual(true)
            expect(typeof res.body).toEqual('object')
            expect(res.body).toHaveProperty('id')
            expect(res.body).toHaveProperty('websiteUrl')
            expect(res.body).toHaveProperty('password')
            expect(res.body).toHaveProperty('UserId')

            done()
        })
    })
})



describe(`GET /passwords/:id`, function() {
    let access_token = null

    beforeAll(done => {
        User.findOne({ where : {email : "admin@mail.com"}})
        .then(user => {
            const payload = {
                id : user.id,
                email : user.email,
            }

            access_token = genToken(payload)

            done()
        })
    })

    it ("should status 200 get passwords id 1" , function (done) {
        request(app)
        .get("/passwords/1")
        .set("access_token", access_token)
        .end((err, res) => {
            if(err) done(err)

            expect(res.statusCode).toEqual(200)
            expect(typeof res.body).toEqual('object')
            expect(res.body).toHaveProperty('id')
            expect(res.body).toHaveProperty('websiteUrl')
            expect(res.body).toHaveProperty('password')
            expect(res.body).toHaveProperty('UserId')

            done()
        })
    })

})



describe(`PUT /passwords/:id`, function() {
    let access_token = null

    beforeAll(done => {
        User.findOne({ where : {email : "admin@mail.com"}})
        .then(user => {
            const payload = {
                id : user.id,
                email : user.email,
            }

            access_token = genToken(payload)

            done()
        })
    })

    it ("should status 200 get passwords id 1" , function (done) {
        const update = {
            websiteUrl : "google.google.google",
            password : "adminadmin"
        }

        request(app)
        .put("/passwords/1")
        .set("access_token", access_token)
        .send(update)
        .end((err, res) => {
            if(err) done(err)

            // tabahi
            expect(res.statusCode).toEqual(200)
            expect(typeof res.body).toEqual('object')
            expect(res.body).toHaveProperty('id')
            expect(res.body).toHaveProperty('websiteUrl')
            expect(res.body).toHaveProperty('password')
            expect(res.body).toHaveProperty('UserId')
            expect(res.body.websiteUrl).toEqual("google.google.google")
            expect(res.body.password).toEqual("adminadmin")

            done()
        })
    })

})


describe(`DELETE /passwords/:id`, function() {
    let access_token = null

    beforeAll(done => {
        User.findOne({ where : {email : "admin@mail.com"}})
        .then(user => {
            const payload = {
                id : user.id,
                email : user.email,
            }

            access_token = genToken(payload)

            done()
        })
    })

    it ("should status 200 get passwords id 1" , function (done) {
        request(app)
        .delete(`/passwords/${idCreate}`)
        .set("access_token", access_token)
        .end((err, res) => {
            if(err) done(err)

            // tabahi
            expect(res.statusCode).toEqual(200)
            expect(typeof res.body).toEqual('object')
            expect(res.body).toHaveProperty('message')
            expect(typeof res.body.message).toEqual('string')

            done()
        })
    })
})