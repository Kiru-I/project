require('dotenv').config()

var allowlist = [process.env.DOMAIN.toString()]
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = {
        "origin" : true,
        "methods" : "GET, POST",
    }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions) 
}

module.exports = corsOptionsDelegate