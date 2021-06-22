const { verifyToken } = require('../helper/jwt')


const { User } = require("../models")


async function auth ( req, res, next) {
    try {
        let accessToken = req.headers.access_token

        let decoded = verifyToken(accessToken)

        // console.log(decoded)

        const user = await User.findOne({
            where : { email : decoded.email}
        })

        if(user) {
            req.userLogin = {
                id : user.id,
                email : user.email,
                role : "user"
            }
            next()
        } else {
            next({ name : "userNotFound"})
        }

    } catch (err) {
        next(err)
    }
}

module.exports= {
    auth
}
