var express = require('express');
var router = express.Router();

/* GET bicicleta page. */
router.get('/', function(req, res, next) {
  res.render('bicicleta', { title: 'Bicicleta' });
});

/* GET rodas sub-page. */
router.get('/rodas', function(req, res, next) {
  res.render('rodas', { title: 'Rodas' });
});

module.exports = router;