const express = require('express');
const logoutController = require('../controllers/logout.controller')

const router = express.Router();



router.get('/', logoutController.get)










module.exports = router