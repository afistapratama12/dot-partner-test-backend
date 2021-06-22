const request = require('supertest')

const app = require('../app')

const { genToken } = require("../helper/jwt")
const { User } = require('../models')

// belum selesai

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
})