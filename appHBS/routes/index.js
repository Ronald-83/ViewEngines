var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const noticias = [
    { titulo: 'Novo lançamento', resumo: 'Versão atualizada do site com múltiplas view engines.' },
    { titulo: 'Tutoriais', resumo: 'Materiais para aprender Handlebars e rotas no Express.' },
    { titulo: 'Projetos', resumo: 'Exemplos práticos para estudo e implementação.' }
  ];

  res.render('index', { title: 'Express', noticias });
});

module.exports = router;
