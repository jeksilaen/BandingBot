const express = require('express');
const homeController = require('../controllers/home.controller');
const errorHandler = require('../middlewares/errorHandler.middleware');

const router = express.Router();



router.get('/', homeController.get, errorHandler)










module.exports = router