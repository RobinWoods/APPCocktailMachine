const express = require('express');
const router = express.Router();
const softController = require('../controllers/softController');

/* GET home page. */

router.get('/', softController.getPresent);

module.exports = router;
