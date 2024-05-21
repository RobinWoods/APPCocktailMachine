const express = require('express');
const router = express.Router();
const coktailController = require('../controllers/cocktailController');


/* GET home page. */

router.get('/', coktailController.getAllPresent);

module.exports = router;
