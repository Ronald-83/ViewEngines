var express = require('express');
var router = express.Router();

/* GET esportes page. */
router.get('/', function(req, res, next) {
  res.render('esportes', { title: 'Esportes' });
});

module.exports = router;
