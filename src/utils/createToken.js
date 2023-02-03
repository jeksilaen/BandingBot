const jwt = require('jsonwebtoken');

function createAccToken(load, maxAge){
  return jwt.sign(load, process.env.TOKEN_KEY, {
    expiresIn: maxAge
  })
}

function createRefToken(load){
  return jwt.sign(load, process.env.TOKEN_KEY)
}


module.exports = {
  createAccToken,
  createRefToken
};