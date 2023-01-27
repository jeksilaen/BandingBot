const loginService = require('../services/login.service')

function get(req, res, next) {
    try {
        return res.render('login')
    } catch (error) {
        console.error('Error while delivering login page!');
        return next(error);
    }
}

function post(req, res, next) {
    try {
        const {accToken, refToken, maxAge} = loginService.login(req.body)
        if (accToken, refToken) {
            res.cookie('jwtAcc', accToken, { httpOnly: true, maxAge: maxAge * 1000 })
            
            res.cookie('jwtRef', refToken, { httpOnly: true })

            res.redirect('/')
        }
        else{
            return res.redirect('/login')
        }
        
    } catch (error) {
        console.error('Error while trying to log in user!');
        next(error);
    }
}


function logout(req, res, next) {
    try {
        res.cookie('jwt', '', {
            maxAge: 1
        })
    
        res.locals.user = null
        res.redirect('/login')
    } catch (error) {
        next(error);
    }
    
}






module.exports = {
    get,
    post,
    logout
}