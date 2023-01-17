const jwt = require('jsonwebtoken');

function jwtAuth(req, res, next) {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, process.env.TOKEN_KEY, (err, decodedToken) => {
            if (err) {
                console.log('Request denied!');
                console.error(err.message);

                res.redirect('/login');
            } else{
                console.log('Request accepted!');
                console.log(decodedToken);
                
                res.locals.user = decodedToken.id
                next();
            }
        })
    } else{
        console.log('Request denied!');
        res.redirect('/login');
    }
}

module.exports = jwtAuth;