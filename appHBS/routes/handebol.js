var express = require('express');
var router = express.Router();

/* GET handebol page. */
router.get('/', function(req, res, next) {
  res.render('handebol', { title: 'Handebol' });
});

module.exports = router;
