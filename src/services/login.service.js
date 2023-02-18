const {createAccToken, createRefToken} = require('../utils/createToken');

const bcrypt = require('bcrypt')


function authUser(load, userPass, docsPass) {
  if (bcrypt.compareSync(userPass, docsPass)) {
    const maxAge = 15;
    const accToken = createAccToken({id: load}, maxAge);
    const refToken = createRefToken({id: load});

    return {accToken, refToken, maxAge}
  } 

  return false

  
}


module.exports = {
  authUser
}
