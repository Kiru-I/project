// JANGAN DI PUSH ANJIR

require('dotenv').config()
const jwt = require("jsonwebtoken")
const express = require('express');
// const cors = require("cors")
const router = express.Router();

router.get('/s/:id/' ,(req, res) => {
    res.send(jwt.sign({
        id : req.params.id,
        name : process.env.JWT_KEY.toString()
    }, process.env.JWT_KEY.toString()))
})

module.exports = router;