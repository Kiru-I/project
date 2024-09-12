require('dotenv').config()
var exports = module.exports = {}
const jwt = require("jsonwebtoken")
const key = process.env.JWT_KEY.toString()

exports.authJWT = (req, res, next) => {
    const login_token = req.cookies.login_token;
    try {
        const user = jwt.verify(login_token, key)
        req.user = user
        next()
    } catch(err) {
        res.clearCookie("login_token")
        return res.redirect("/login/")
    }
}
