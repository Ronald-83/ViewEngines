var express = require('express');
var router = express.Router();

/* GET handebol page. */
router.get('/', function(req, res, next) {
  const equipes = [
    { nome: 'Equipe A', destaque: 'Campeã regional' },
    { nome: 'Equipe B', destaque: 'Centro de treinamento avançado' },
    { nome: 'Equipe Juvenil', destaque: 'Foco em desenvolvimento' }
  ];

  res.render('handebol', { title: 'Handebol', equipes });
});

/* GET equipes sub-page */
router.get('/equipes', function(req, res, next) {
  const equipesDetalhes = [
    { nome: 'Equipe A', treinador: 'Carlos', descricao: 'Foco em táticas ofensivas.' },
    { nome: 'Equipe B', treinador: 'Mariana', descricao: 'Ênfase em preparação física.' },
    { nome: 'Equipe Juvenil', treinador: 'João', descricao: 'Desenvolvimento de jovens talentos.' }
  ];

  res.render('equipes', { title: 'Equipes de Handebol', equipes: equipesDetalhes });
});

module.exports = router;
