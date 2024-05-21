const express = require('express');
const router = express.Router();
const cocktailController = require('../controllers/cocktailController');


router.post('/', cocktailController.sendRecipeWithMQTT);

module.exports = router;