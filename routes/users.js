var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('layout', {title: 'Users', testH1: 'test'});
});

module.exports = router;
