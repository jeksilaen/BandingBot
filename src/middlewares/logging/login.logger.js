
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
    console.log('Here is the form data:');
    console.log(req.body);
    
    next();
};

module.exports = {
    logPageRequest,
    logFormSubmit,
    logUserLogout
}
