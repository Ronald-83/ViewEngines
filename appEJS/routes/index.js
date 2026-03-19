var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const cards = [
    { nome: 'Bem-vindo', icon: '👋', descricao: 'Página inicial com recursos e links úteis.' },
    { nome: 'Sobre', icon: 'ℹ️', descricao: 'Informações sobre este projeto de view engines.' },
    { nome: 'Contato', icon: '✉️', descricao: 'Formas de entrar em contato e enviar feedback.' }
  ];

  res.render('index', { title: 'Express', cards });
});

module.exports = router;
