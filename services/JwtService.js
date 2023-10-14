const { JWT_SECRET } = require("../config");
const jwt = require('jsonwebtoken')

class JwtService {

    static sign(payload, expiry = '24h', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }
    static verify(token, secret = JWT_SECRET) {
        console.log("🚀 ~ file: JwtService.js:10 ~ JwtService ~ verify ~ secret:", secret)
        return jwt.verify(token,secret)
    }
}

module.exports = JwtService;