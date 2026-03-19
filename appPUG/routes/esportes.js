var express = require('express');
var router = express.Router();

/* GET esportes page. */
router.get('/', function(req, res, next) {
  const esportes = [
    { nome: 'Futebol', destaque: 'Popular no Brasil' },
    { nome: 'Vôlei', destaque: 'Muito praticado em praia e quadra' },
    { nome: 'Basquete', destaque: 'Rápido e dinâmico' }
  ];

  res.render('esportes', { title: 'Esportes', esportes });
});

/* GET detalhes sub-page for esportes */
router.get('/detalhes', function(req, res, next) {
  const detalhes = [
    { nome: 'Futebol', icon: '⚽', descricao: 'Partidas, técnicas, campeonatos e curiosidades.' },
    { nome: 'Vôlei', icon: '🏐', descricao: 'Treinamentos, regras e destaques de praia e quadra.' },
    { nome: 'Basquete', icon: '🏀', descricao: 'Jogadas, ligas e histórias dos maiores atletas.' }
  ];

  res.render('esportes', { title: 'Esportes - Detalhes', esportes: detalhes, detalhes: true });
});

module.exports = router;
