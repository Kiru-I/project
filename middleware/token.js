require('dotenv').config()
const jwt = require("jsonwebtoken")
const key = process.env.JWT_KEY.toString()


const token = () => {
    const t = jwt.sign({
        id : "66e04d9e40f64ed4bed52d6f",
        name : "akusayangpenus"
    }, key)
    return t
}   


const d_token = async (token) => {
    try {
        const aid = jwt.verify(token, key)
        return aid
    } catch(err) {
        res.clearCookie("login_token")
        return res.redirect("/login/")
    }
}

module.exports = d_token