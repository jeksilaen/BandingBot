const express = require('express');
const loginController = require('../controllers/login.controller')
const errorHandler = require('../middlewares/errorHandler');
const logger = require('../middlewares/logging/login.logger');


const router = express.Router();


// Login routes
router.get('/', logger.logPageRequest, loginController.get, errorHandler)

router.post('/', logger.logFormSubmit, loginController.post, errorHandler)


// Logout routes
router.get('/out', logger.logUserLogout, loginController.logout, errorHandler)









module.exports = router