const { password } = require('../models')

const Redis = require('ioredis')

const redis = new Redis()
const redisKeyData = "password:data"
const redisKeyUserID = "password:id"

class PasswordController {
    static async getByUserLogin(req, res, next) {
        try {
            let idUserLogin = req.userLogin.id

            if (!idUserLogin) next({ name : "authErrors"})

            const cacheIdLogin = await redis.get(redisKeyUserID)

            if (idUserLogin == +cacheIdLogin) {
                const cacheData = await redis.get(redisKeyData)
                if (cacheData) {
                    console.log("get data dari redis")
                    res.status(200).json(JSON.parse(cacheData))

                    return
                } 
            } 

            const data = await password.findAll({ 
                where : {UserId : idUserLogin},
                attributes : {exclude : ['createdAt', 'updatedAt']}
            })
            
            redis.set(redisKeyUserID, idUserLogin)
            redis.set(redisKeyData, JSON.stringify(data))

            res.status(200).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async getPassByID(req, res, next) {
        let id = +req.params.id

        try {
            const data = await ProductController.findOne({where : {id}})

            res.status(200).json(data)
        } catch (error) {
            next(err)
        }
    }

    static async addPassword(req, res, next) {
        let newPassword = {
            websiteUrl : req.body.websiteUrl,
            password : req.body.password,
            UserId : req.userLogin.id
        }

        try {
            const data = await password.create(newPassword)

            await redis.del(redisKeyData)
            await redis.del(redisKeyUserID)
            
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    }

    static async updatePassword(req, res, next) {
        let passId = +req.params.id

        let updatePass = {
            websiteUrl : req.body.websiteUrl,
            password : req.body.password,
        }

        try {

            const data = await password.update(updatePass, {
                where : {id : passId},
                returning: true,
                plain :true
            })

            if (!data) {
                next({name : "notFound"})
            } else {
                await redis.del(redisKeyData)
                await redis.del(redisKeyUserID)

                res.status(200).json(data[1])
            }


        } catch (err) {
            next(err)
        }
    }

    static async deletePassword(req, res, next) {
        let passId = +req.params.id

        try {
            const data = await password.destroy({ where : 
                {id : passId}
            })
            
            if(!data) {
                next({ name : 'notFound' })
            } else {
                await redis.del(redisKeyData)
                await redis.del(redisKeyUserID)

                res.status(200).json({
                    message : `password id ${passId} success to delete`
                })
            }

        } catch (err) {
            next(err)
        }
    }

}

module.exports = PasswordController