var express = require('express');
var router = express.Router();

/* GET futebol page. */
router.get('/', function(req, res, next) {
  const itens = [
    { nome: 'Campeonato Brasileiro', icon: '🏆', descricao: 'O principal campeonato de futebol do Brasil.' },
    { nome: 'Copa do Mundo', icon: '🌍', descricao: 'O maior torneio internacional de futebol.' },
    { nome: 'Libertadores', icon: '⚽', descricao: 'A competição continental da América do Sul.' },
    { nome: 'Champions League', icon: '⭐', descricao: 'O torneio de clubes mais prestigiado da Europa.' }
  ];

  res.render('futebol', { title: 'Futebol', itens });
});

/* GET jogadores sub-page. */
router.get('/jogadores', function(req, res, next) {
  const jogadores = [
    { nome: 'Pelé', icon: '👑', descricao: 'Lenda do futebol brasileiro.' },
    { nome: 'Messi', icon: '🐐', descricao: 'Jogador argentino, considerado um dos melhores.' },
    { nome: 'Cristiano Ronaldo', icon: '🔥', descricao: 'Estrela portuguesa de clubes europeus.' },
    { nome: 'Neymar', icon: '⚡', descricao: 'Atacante brasileiro, criativo e habilidoso.' }
  ];

  res.render('jogadores', { title: 'Jogadores', jogadores });
});

module.exports = router;