const loginService = require('../services/login.service')

function get(req, res, next) {
    try {
        res.render('login')
        return
    } catch (error) {
        console.error('Error while delivering login page!');
        next(error);
    }
}

function post(req, res, next) {
    try {
        if (loginService.login(req.body)) {
            res.redirect('/home')
        }
        else{
            res.redirect('/login')
        }
        
    } catch (error) {
        console.error('Error while trying to log in user!');
        next(error);
    }
}









module.exports = {
    get,
    post
}