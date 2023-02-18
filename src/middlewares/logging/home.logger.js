
function logPageRequest(req, res, next) {
    console.log('\nA user has requested the home page.');
    
    next();
};

function logPageSubmit(req, res, next) {
    console.log('\nA user has submitted a scrape request.');
    console.log('Here are the data:');
    console.log(req.body);
    
    next();
};


module.exports = {
    logPageRequest,
    logPageSubmit
}
