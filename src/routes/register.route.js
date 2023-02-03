const express = require('express');
const registerController = require('../controllers/register.controller')
const errorHandler = require('../middlewares/errorHandler');
const logger = require('../middlewares/logging/register.logger');


const router = express.Router();


// Login routes
router.get('/', logger.logPageRequest, registerController.get, errorHandler)

router.post('/', logger.logFormSubmit, registerController.post, errorHandler)










module.exports = router