
function get(req, res, next) {
    res.cookie('jwt', '', {
        maxAge: 1
    })

    res.locals.user = null
    // res.redirect('/login')
}

module.exports = {
    get
}