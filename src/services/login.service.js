const {createAccToken, createRefToken} = require('../utils/createToken');
let refTokens = require('../../refTokens')


function login(userData) {
  if (userData.email === 'admin@gmail.com' && userData.password === 'asd') {
    try {
      if (true) {
        const maxAge = 15;
        const accToken = createAccToken('123', maxAge);
        const refToken = createRefToken('123');
        return {accToken, refToken, maxAge}
      }
      
    } catch (error) {
      console.error(error);
    }
  }
  else{
    return false
  }
  
}

function refreshToken() {
    const maxAge = 15;
    const accToken = createAccToken('123', maxAge);

    console.log('New access token created!');

    if (accToken) {
        return {accToken, maxAge}
    }
    return false
}



module.exports = {
  login,
  refreshToken
}
