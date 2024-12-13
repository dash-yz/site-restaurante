const restauranteModel = require("../models/restauranteModel") // Importa o model para interagir com o banco

// GET

  // All Produtos
  exports.getAllProdutos = (req, res) => {
    restauranteModel.getAllProdutos((err, produtos) => {
      if (err) {
        res.status(500).send("Erro ao buscar os produtos" + err); // Retorna um erro 500 se algo deu errado
      } else {
        res.json(produtos); // Retorna os usuários em formato JSON
      }
    });
  };
