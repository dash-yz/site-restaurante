const createConnection = require("../db"); // Importa a função para criar a conexão com o banco de dados
const { Request, TYPES } = require("tedious"); // Importa as classes necessárias do tedious

// GET
  // Todos os Produtos
  exports.getAllProdutos = (callback) => {
    const connection = createConnection(); // Cria a conexão com o banco de dados
    connection.on("connect", (err) => {
      if (err) {
        return callback(err, null); // Trata erros de conexão
      }
      const query = `SELECT * FROM produtos`; // SQL para buscar todos os produtos
      const request = new Request(query, (err) => {
        if (err) {  
          return callback(err, null) // Trata erros de execução da consulta
        }
      })

      // Evento 'row' para capturar todas as linhas de resultados
      const result = [] // Variável para armazenar os resultados
      request.on("row", (columns) => {
        result.push({
          id: columns[0].value,
          categoria: columns[2].value,
          nome: columns[1].value,
          descricao: columns[3].value
        })
      })

      // Ao completar a consulta, retorna o array com todos os produtos
      request.on("requestCompleted", (rowCount) => {
        if (rowCount === 0) {
          callback(null, [])
        } else {
          callback(null, result) // Retorna o array de resultados
        }
    })

      connection.execSql(request) // Executa a consulta
    })

    connection.connect() // Inicia a conexão
  }

  // Todos os Clientes
  exports.getAllClientes = (callback) => {
    const connection = createConnection(); // Cria a conexão com o banco de dados
    connection.on("connect", (err) => {
      if (err) {
        return callback(err, null) // Trata erros de conexão
      }
      const query = `SELECT * FROM clientes` // SQL para buscar todos os clientes
      const request = new Request(query, (err) => {
        if (err) {  
          return callback(err, null) // Trata erros de execução da consulta
        }
      })

      // Evento 'row' para capturar todas as linhas de resultados
      const result = [] // Variável para armazenar os resultados
      request.on("row", (columns) => {
        result.push({
          id: columns[0].value,
          nome: columns[1].value,
          endereco: columns[2].value,
          telefone: columns[3].value,
          id_cadastro: columns[4].value
        })
      })

      // Ao completar a consulta, retorna o array com todos os clientes
    request.on("requestCompleted", (rowCount) => {
      if (rowCount === 0) {
        callback(null, [])
      } else {
        callback(null, result) // Retorna o array de resultados
      }
    })
    connection.execSql(request) // Executa a consulta
    })
  connection.connect() // Inicia a conexão
  }

  // Todos os funcionários
  exports.getAllFuncionarios = (callback) => {
    const connection = createConnection(); // Cria a conexão com o banco de dados
    connection.on("connect", (err) => {
      if (err) {
        return callback(err, null) // Trata erros de conexão
      }
      const query = `SELECT * FROM funcionarios` // SQL para buscar todos os funcionarios
      const request = new Request(query, (err) => {
        if (err) {  
          return callback(err, null) // Trata erros de execução da consulta
        }
      })

      // Evento 'row' para capturar todas as linhas de resultados
      const result = [] // Variável para armazenar os resultados
      request.on("row", (columns) => {
        result.push({
          id: columns[0].value,
          nome: columns[1].value,
          email: columns[2].value,
          telefone: columns[3].value,
          cargo: columns[4].value,
          id_cadastro: columns[5].value
        })
      })

      // Ao completar a consulta, retorna o array com todos os funcionários
    request.on("requestCompleted", (rowCount) => {
      if (rowCount === 0) {
        callback(null, [])
      } else {
        callback(null, result) // Retorna o array de resultados
      }
    })
    connection.execSql(request) // Executa a consulta
    })
  connection.connect() // Inicia a conexão
  }

  // Todos os pedidos
  exports.getAllPedidos = (callback) => {
    const connection = createConnection(); // Cria a conexão com o banco de dados
    connection.on("connect", (err) => {
      if (err) {
        return callback(err, null) // Trata erros de conexão
      }
      const query = `SELECT * FROM pedidos` // SQL para buscar todos os pedidos
      const request = new Request(query, (err) => {
        if (err) {  
          return callback(err, null) // Trata erros de execução da consulta
        }
      })

      // Evento 'row' para capturar todas as linhas de resultados
      const result = [] // Variável para armazenar os resultados
      request.on("row", (columns) => {
        result.push({
          id: columns[0].value,
          id_cliente: columns[1].value,
          descricao: columns[2].value
        })
      })

      // Ao completar a consulta, retorna o array com todos os pedidos
    request.on("requestCompleted", (rowCount) => {
      if (rowCount === 0) {
        callback(null, [])
      } else {
        callback(null, result) // Retorna o array de resultados
      }
    })
    connection.execSql(request) // Executa a consulta
    })
  connection.connect() // Inicia a conexão
  }

  // Todos os cadastros
  exports.getAllCadastros = (callback) => {
    const connection = createConnection(); // Cria a conexão com o banco de dados
    connection.on("connect", (err) => {
      if (err) {
        return callback(err, null) // Trata erros de conexão
      }
      const query = `SELECT * FROM cadastros` // SQL para buscar todos os cadastros
      const request = new Request(query, (err) => {
        if (err) {  
          return callback(err, null) // Trata erros de execução da consulta
        }
      })

      // Evento 'row' para capturar todas as linhas de resultados
      const result = [] // Variável para armazenar os resultados
      request.on("row", (columns) => {
        result.push({
          id: columns[0].value,
          nameuser: columns[1].value,
          senha: columns[2].value
        })
      })

      // Ao completar a consulta, retorna o array com todos os cadastros
    request.on("requestCompleted", (rowCount) => {
      if (rowCount === 0) {
        callback(null, [])
      } else {
        callback(null, result) // Retorna o array de resultados
      }
    })
    connection.execSql(request) // Executa a consulta
    })
  connection.connect() // Inicia a conexão
  }

//.

// POST

  // Criar pedido
  exports.createPedido = (data, callback) => {
    const connection = createConnection(); // Cria a conexão com o banco de dados
    connection.on("connect", (err) => {
      if (err) {
        return callback(err, null) // Trata erros de conexão
      } // Consulta SQL para inserir um novo Pedido
      const query = `INSERT INTO pedidos (id_cliente, descricao) VALUES (@id_cliente, @descricao)`;
      const request = new Request(query, (err) => {
        if (err) {
          callback(err) // Chama a função callback com erro se houver falha
        } else {
          callback(null, { message: "Pedido criado com sucesso!" })
        }
      }) // Adiciona os parâmetros necessários para a inserção
      request.addParameter("id_cliente", TYPES.Int, data.id_cliente)
      request.addParameter("descricao", TYPES.NVarChar, data.descricao)
      connection.execSql(request) // Executa a consulta
    })
    connection.connect() // Inicia a conexão
  }

  // Criar Cliente
  exports.createCliente = (data, callback) => {
    const connection = createConnection(); // Cria a conexão com o banco de dados
    connection.on("connect", (err) => {
      if (err) {
        return callback(err, null) // Trata erros de conexão
      } // Consulta SQL para inserir um novo Cliente
      const query = `INSERT INTO clientes (nome, endereco, telefone, id_cadastro) VALUES (@nome, @endereco, @telefone, @id_cadastro)`;
      const request = new Request(query, (err) => {
        if (err) {
          callback(err) // Chama a função callback com erro se houver falha
        } else {
          callback(null, { message: "Cliente inserido com sucesso!" })
        }
      }) // Adiciona os parâmetros necessários para a inserção
      request.addParameter("nome", TYPES.VarChar, data.nome)
      request.addParameter("endereco", TYPES.VarChar, data.endereco)
      request.addParameter("telefone", TYPES.VarChar, data.telefone)
      request.addParameter("id_cadastro", TYPES.Int, data.id_cadastro)
      connection.execSql(request) // Executa a consulta
    })
    connection.connect() // Inicia a conexão
  }

  // Criar Produto
  exports.createProduto = (data, callback) => {
    const connection = createConnection(); // Cria a conexão com o banco de dados
    connection.on("connect", (err) => {
      if (err) {
        return callback(err, null) // Trata erros de conexão
      } // Consulta SQL para inserir um novo Produto
      const query = `INSERT INTO produtos (nome, categoria, descricao) VALUES (@nome, @categoria, @descricao)`;
      const request = new Request(query, (err) => {
        if (err) {
          callback(err) // Chama a função callback com erro se houver falha
        } else {
          callback(null, { message: "Produto inserido com sucesso!" })
        }
      }) // Adiciona os parâmetros necessários para a inserção
      request.addParameter("nome", TYPES.VarChar, data.nome)
      request.addParameter("categoria", TYPES.VarChar, data.categoria)
      request.addParameter("descricao", TYPES.NVarChar, data.descricao)
      connection.execSql(request) // Executa a consulta
    })
    connection.connect() // Inicia a conexão
  }

  // Criar Cadastro
  exports.createCadastro = (data, callback) => {
    const connection = createConnection(); // Cria a conexão com o banco de dados
    connection.on("connect", (err) => {
      if (err) {
        return callback(err, null) // Trata erros de conexão
      } // Consulta SQL para inserir um novo Cadastro
      const query = `INSERT INTO cadastros (nameuser, senha) VALUES (@nameuser, @senha)`;
      const request = new Request(query, (err) => {
        if (err) {
          callback(err) // Chama a função callback com erro se houver falha
        } else {
          callback(null, { message: "Cadastro criado com sucesso!" })
        }
      }) // Adiciona os parâmetros necessários para a inserção
      request.addParameter("nameuser", TYPES.VarChar, data.nameuser)
      request.addParameter("senha", TYPES.NVarChar, data.senha)
      connection.execSql(request) // Executa a consulta
    })
    connection.connect() // Inicia a conexão
  }

  //.