const loginService = require('../services/login.service')
let refTokens = require('../../refTokens')

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

        // save ref token
        refTokens.push(refToken);

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
        res.cookie('jwtAcc', '', {
            maxAge: 1
        })

        refTokens = refTokens.filter(token => token !== req.cookies.jwtRef)
    
        res.locals.user = null
        res.redirect('/login')
    } catch (error) {
        next(error);
    }
    
}

function refreshToken(req, res, next) {
    try { 
        if (refTokens.includes(req.cookies.jwtRef)) {
            const {accToken, maxAge} = loginService.refreshToken(req.cookies.jwtRef)

            if (accToken) {
                res.cookie('jwtAcc', accToken, { httpOnly: true, maxAge: maxAge * 1000 })
    
                res.redirect('/')
            }
            else{
                return res.redirect('/login')
            }
        }
        
        else{
            console.log('Refresh token not found');
            res.redirect('/login')
        }

        
    } catch (error) {
        console.error('Error while trying to log in user!');
        next(error);
    }
}





module.exports = {
    get,
    post,
    logout,
    refreshToken
}