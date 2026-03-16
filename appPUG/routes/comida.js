var express = require('express');
var router = express.Router();

/* GET comida page. */
router.get('/', function(req, res, next) {
  res.render('comida', { title: 'Comida' });
});

/* GET pratos sub-page. */
router.get('/pratos', function(req, res, next) {
  res.render('pratos', { title: 'Pratos' });
});

module.exports = router;