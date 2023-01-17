const jwt = require('jsonwebtoken');

function createToken(id, maxAge){
  return jwt.sign({id}, process.env.TOKEN_KEY, {
    expiresIn: maxAge
  })
}



module.exports = createToken;