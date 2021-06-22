const SECRET_TOKEN = "rahasia-db-dot-partner"
const jwt = require('jsonwebtoken')

function genToken(decoded) {
    return jwt.sign(decoded, SECRET_TOKEN)
}

function verifyToken(token) {
    return jwt.verify(token, SECRET_TOKEN)
}

module.exports = {
    genToken, verifyToken
}