const express = require('express');
const router = express.Router();
const alcoholController = require('../controllers/AlcoholController');

/* GET home page. */

router.post('/', alcoholController.getPresent);

module.exports = router;
