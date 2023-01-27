const jwt = require('jsonwebtoken');

function createAccToken(id, maxAge){
  return jwt.sign({id}, process.env.TOKEN_KEY, {
    expiresIn: maxAge
  })
}

function createRefToken(id){
  return jwt.sign({id}, process.env.TOKEN_KEY)
}


module.exports = {
  createAccToken,
  createRefToken
};