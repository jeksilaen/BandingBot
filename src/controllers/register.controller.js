const loginService = require('../services/login.service')

function get(req, res, next) {
    try {
        return res.render('register')
    } catch (error) {
        console.error('Error while delivering login page!');
        return next(error);
    }
}

function post(req, res, next) {
    try {
        // const {token, maxAge} = loginService.login(req.body)
        // if (token) {
        //     res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        //     res.redirect('/')
        // }
        // else{
        //     return res.redirect('/login')
        // }
        res.redirect('/login')
        
    } catch (error) {
        console.error('Error while trying to log in user!');
        next(error);
    }
}





module.exports = {
    get,
    post
}