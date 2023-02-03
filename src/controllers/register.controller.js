const query = require('../dist/db.service')


function get(req, res, next) {
    try {
        return res.render('register')
    } catch (error) {
        console.error('Error while delivering register page!');
        return next(error);
    }
}

async function post(req, res, next) {
    try {
        if (await query.createUser(req.body)) {
            return res.redirect('/login')
        }

        res.redirect('/register')
        
    } catch (error) {
        console.error('Error while trying to log in user!');
        next(error);
    }
}





module.exports = {
    get,
    post
}