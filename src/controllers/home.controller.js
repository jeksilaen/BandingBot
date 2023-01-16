// const programmingLanguages = require('../services/programmingLanguages.service');

function get(req, res, next) {
  try {
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
