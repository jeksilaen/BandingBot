const createToken = require('../utils/createToken');


function login(userData) {
  // check(userData)
  try {
    if (true) {
      const maxAge = 3 * 24 * 60 * 60;
      const token = createToken('123', maxAge);
      return {token, maxAge}
    }
    return false
    
  } catch (error) {
    console.error(error);
  }
}




module.exports = {
  login
}
