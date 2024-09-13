require('dotenv').config()
const jwt = require("jsonwebtoken")
const key = process.env.JWT_KEY.toString()


const token = () => {
    const t = jwt.sign({
        id : "66e181dd6446d56aba59821f",
        name : key
    }, key, {duration : '2d'}) // 2 Hari
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