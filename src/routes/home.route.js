const express = require('express');
const homeController = require('../controllers/home.controller');
const errorHandler = require('../middlewares/errorHandler');
const logger = require('../middlewares/logging/home.logger');
const jwtAuth = require('../middlewares/jwtAuth')


const router = express.Router();



router.get('/', logger.logPageRequest, jwtAuth, homeController.get, errorHandler)










module.exports = router