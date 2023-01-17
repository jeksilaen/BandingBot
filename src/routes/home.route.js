const express = require('express');
const homeController = require('../controllers/home.controller');
const errorHandler = require('../middlewares/errorHandler.middleware');
const logger = require('../middlewares/homeLogger.middleware');
const jwtAuth = require('../middlewares/auth.middleware')


const router = express.Router();



router.get('/', logger.logPageRequest, jwtAuth, homeController.get, errorHandler)










module.exports = router