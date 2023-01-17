const express = require('express');
const loginController = require('../controllers/login.controller')
const errorHandler = require('../middlewares/errorHandler.middleware');
const logger = require('../middlewares/loginLogger.middleware');


const router = express.Router();



router.get('/', logger.logPageRequest, loginController.get, errorHandler)

router.post('/', logger.logFormSubmit, loginController.post, errorHandler)

router.post('/', (req, res) => {
    res.send('hi')
})









module.exports = router