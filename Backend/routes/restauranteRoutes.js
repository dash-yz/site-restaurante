// Define as rotas
const express = require("express")
const router = express.Router()
const restauranteController = require("../controllers/restauranteController") // Importa os controles

// Rotas GET
    // Buscar todos os produtos
    router.get("/restaurante/produtos", restauranteController.getAllProdutos)

    // Buscar todos os clientes
    router.get("/restaurante/clientes", restauranteController.getAllClientes)

    // Buscar todos os funcionários
    router.get("/restaurante/funcionarios", restauranteController.getAllFuncionarios)

    // Buscar todos os pedidos
    router.get("/restaurante/pedidos", restauranteController.getAllPedidos)

    // // Buscar todos os cadastros
    // router.get("/restaurante/cadastros", restauranteController.getAllCadastros)

//.

// // Rotas POST
//     // Criar pedido
//     router.post('/restaurante/pedido', restauranteController.createPedido)

//     // Criar Cliente
//     router.post('/restaurante/cliente', restauranteController.createCliente)

//     // Criar Produto
//     router.post('/restaurante/produto', restauranteController.createProduto)

// //.

// // Rotas PUT
//     // Atualizar produto
//     router.put("/restaurante/produto/update", restauranteController.updateProduto)

//     // Atualizar Cliente
//     router.put("/restaurante/cliente/update", restauranteController.updateCliente)

//     // Atualizar Funcionário
//     router.put("/restaurante/funcionario/update", restauranteController.updateFuncionario)

//     // Login Funcionario
//     router.put("/restaurante/login/funcionario/update", restauranteController.updateLoginFunc)

//     // Login Cliente
//     router.put("/restaurante/login/cliente/update", restauranteController.updateLoginCliente)
// //.

module.exports = router;  // Exporta para o index