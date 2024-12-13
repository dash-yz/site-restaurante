const restauranteModel = require("../models/restauranteModel") // Importa o model para interagir com o banco

// GET

  // All Produtos
  exports.getAllProdutos = (req, res) => {
    restauranteModel.getAllProdutos((err, produtos) => {
      if (err) {
        res.status(500).send("Erro ao buscar os produtos") // Retorna um erro 500 se algo deu errado
      } else {
        res.json(produtos) // Retorna os produtos em formato JSON
      }
    })
  }

  // All Clientes
  exports.getAllClientes = (req, res) => {
    restauranteModel.getAllClientes((err, clientes) => {
      if (err) {
        res.status(500).send("Erro ao buscar os clientes") // Retorna um erro 500 se algo deu errado
      } else {
        res.json(clientes) // Retorna os clientes em formato JSON
      }
    })
  }

  // All Funcionários
  exports.getAllFuncionarios = (req, res) => {
    restauranteModel.getAllFuncionarios((err, funcionarios) => {
      if (err) {
        res.status(500).send("Erro ao buscar os funcionários") // Retorna um erro 500 se algo deu errado
      } else {
        res.json(funcionarios) // Retorna os clientes em formato JSON
      }
    })
  }

//.