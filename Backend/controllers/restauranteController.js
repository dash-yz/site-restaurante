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
        res.json(funcionarios) // Retorna os funcionários em formato JSON
      }
    })
  }

  // All Pedidos
  exports.getAllPedidos = (req, res) => {
    restauranteModel.getAllPedidos((err, pedidos) => {
      if (err) {
        res.status(500).send("Erro ao buscar os pedidos") // Retorna um erro 500 se algo deu errado
      } else {
        res.json(pedidos) // Retorna os pedidos em formato JSON
      }
    })
  }

  // All Cadastros
  exports.getAllCadastros = (req, res) => {
    restauranteModel.getAllCadastros((err, cadastros) => {
      if (err) {
        res.status(500).send("Erro ao buscar os cadastros") // Retorna um erro 500 se algo deu errado
      } else {
        res.json(cadastros) // Retorna os cadastros em formato JSON
      }
    })
  }

//.

// POST

  // Função para criar um pedido
  exports.createPedido = (req, res) => {
    const data = req.body // Extrai os dados do corpo da aquisição
    restauranteModel.createPedido(data, (err) => {
    if (err) {
        res.status(500).send("Erro ao criar Pedido.") // Retorna um erro 500 se algo deu errado
    } else {
        res.status(201).send("Pedido criado com sucesso!") // Retorna status 201 (criado) se bem-sucedido
    }
    })
  }

  // // Função para criar um cliente
  // exports.createCliente = (req, res) => {
  //   const data = req.body // Extrai os dados do corpo da aquisição
  //   restauranteModel.createCliente(data, (err) => {
  //   if (err) {
  //       res.status(500).send("Erro ao criar Cliente.") // Retorna um erro 500 se algo deu errado
  //   } else {
  //       res.status(201).send("Cliente criado com sucesso!") // Retorna status 201 (criado) se bem-sucedido
  //   }
  //   })
  // }

//.