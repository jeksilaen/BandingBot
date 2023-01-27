
function logPageRequest(req, res, next) {
    console.log('\nA user has requested the login page.');
    
    next();
};

function logFormSubmit(req, res, next) {
    console.log('\nA user has submitted the login form.');
    console.log('Here is the form data:');
    console.log(req.body);
    
    next();
};

function logUserLogout(req, res, next) {
    console.log('\nA user has logged out.');
    
    next();
};

function logRefreshToken(req, res, next) {
    console.log('\nA user has requested a new access token.');
    
    next();
};


module.exports = {
    logPageRequest,
    logFormSubmit,
    logUserLogout,
    logRefreshToken
}
