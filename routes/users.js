var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/top', function(req, res, next) {
  res.send('top with a resource');
});

module.exports = router;
