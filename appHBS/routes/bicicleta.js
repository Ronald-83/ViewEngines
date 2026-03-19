var express = require('express');
var router = express.Router();

/* GET bicicleta page. */
router.get('/', function(req, res, next) {
  const bicicletas = [
    { nome: 'Bicicleta de Montanha', icon: '🚵‍♂️', descricao: 'Perfeita para trilhas e aventuras ao ar livre.' },
    { nome: 'Bicicleta Urbana', icon: '🚴‍♀️', descricao: 'Ideal para deslocamentos diários na cidade.' },
    { nome: 'Bicicleta Elétrica', icon: '⚡🚴', descricao: 'Combina pedalada com assistência elétrica.' }
  ];

  res.render('bicicleta', { title: 'Bicicleta', bicicletas });
});

/* GET rodas sub-page. */
router.get('/rodas', function(req, res, next) {
  const rodas = [
    { tipo: 'Aro 26', descricao: 'Boa para bicicletas de montanha e uso geral.' },
    { tipo: 'Aro 29', descricao: 'Maior estabilidade em terrenos acidentados.' },
    { tipo: 'Aro 700c', descricao: 'Comum em bicicletas de estrada.' }
  ];

  res.render('rodas', { title: 'Rodas', rodas });
});

module.exports = router;