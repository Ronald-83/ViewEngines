var express = require('express');
var router = express.Router();

/* GET comida page. */
router.get('/', function(req, res, next) {
  const pratos = [
    { nome: 'Pizza', icon: '🍕', descricao: 'Deliciosa pizza italiana com diversos sabores.' },
    { nome: 'Hambúrguer', icon: '🍔', descricao: 'Clássico hambúrguer americano.' },
    { nome: 'Sushi', icon: '🍣', descricao: 'Pratos japoneses frescos e saborosos.' }
  ];

  res.render('comida', { title: 'Comida', pratos });
});

/* GET pratos sub-page. */
router.get('/pratos', function(req, res, next) {
  const pratos = [
    { nome: 'Lasanha', descricao: 'Lasanha à bolonhesa caseira.' },
    { nome: 'Risoto', descricao: 'Risoto cremoso de cogumelos.' }
  ];

  res.render('pratos', { title: 'Pratos', pratos });
});

module.exports = router;