var express = require('express');
var router = express.Router();

/* GET produtos page. */
router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'Produtos' });
});

module.exports = router;
