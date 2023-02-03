// const query = require('../services/db.service')

function get(req, res, next) {
  try {
      // query.getAllUsers()
      res.render('home')
      return
  } catch (err) {
      console.error('Error while delivering homepage!');
      next(err);
  }
}

module.exports = {
  get
};
