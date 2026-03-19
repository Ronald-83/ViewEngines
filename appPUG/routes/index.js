var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const destaques = [
    { titulo: 'Bem-vindo', descricao: 'Página inicial Pug com conteúdo dinâmico.' },
    { titulo: 'Artigos', descricao: 'Textos e tutoriais sobre Pug e Express.' },
    { titulo: 'Exemplos', descricao: 'Pequenos projetos para aprender na prática.' }
  ];

  res.render('index', { title: 'Express', destaques });
});

module.exports = router;
