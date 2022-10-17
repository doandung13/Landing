const express = require('express');
const router = express.Router();

const accountController = require('../app/controllers/AccountController');

// accountController.index
router.use('/', accountController.index)

module.exports = router;
