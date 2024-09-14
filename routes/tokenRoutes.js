// JANGAN DI PUSH ANJIR

require('dotenv').config()
const jwt = require("jsonwebtoken")
const express = require('express');
const router = express.Router();

const key = process.env.JWT_KEY.toString()
const key2 = process.env.JWT_KEY_2.toString()

router.get('/id/:id/' ,(req, res) => {
    res.send(jwt.sign({
        id : req.params.id,
        stat : [key2, "byid"]
    }, key))
})

router.get('/all/', (req, res) => {
    res.send(jwt.sign({
        id : "akubencipenus",
        stat : [key2, "all"]
    }, key))
})

module.exports = router;