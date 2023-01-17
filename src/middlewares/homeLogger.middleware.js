
function logPageRequest(req, res, next) {
    console.log('\nA user has requested the home page.');
    
    next();
};


module.exports = {
    logPageRequest
}
