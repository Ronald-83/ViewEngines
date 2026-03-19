var express = require('express');
var router = express.Router();

const produtos = [
  { id: 0, nome: 'Fenda Tramontina', icon: '🛠️', descricao: 'Ferramenta de alta qualidade para construção.' },
  { id: 1, nome: 'Martelo Tramontina', icon: '🔨', descricao: 'Martelo resistente para uso geral.' },
  { id: 2, nome: 'Chave de Fenda', icon: '🔧', descricao: 'Conjunto de chaves de fenda variadas.' },
  { id: 3, nome: 'Serra Elétrica', icon: '🪚', descricao: 'Serra elétrica para cortes precisos.' }
];

/* GET produtos page. */
router.get('/', function(req, res, next) {
  res.render('produtos', { title: 'Produtos', produtos });
});

/* GET detalhes do produto por id */
router.get('/detalhes/:id', function(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const produto = produtos.find(p => p.id === id);
  if (!produto) return res.status(404).send('Produto não encontrado');

  res.render('produto', { title: produto.nome, produto });
});

module.exports = router;
