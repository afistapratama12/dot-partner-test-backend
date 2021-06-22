const jwt = require('jsonwebtoken')

function genToken(decoded) {
    return jwt.sign(decoded, process.env.SECRET_TOKEN)
}

function verifyToken(token) {
    return jwt.sign(token, process.env.SECRET_TOKEN)
}

module.exports = {
    genToken, verifyToken
}