var express = require('express');
var router = express.Router();

/* GET futebol page. */
router.get('/', function(req, res, next) {
  res.render('futebol', { title: 'Futebol' });
});

/* GET jogadores sub-page. */
router.get('/jogadores', function(req, res, next) {
  res.render('jogadores', { title: 'Jogadores' });
});

module.exports = router;