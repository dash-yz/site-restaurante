const createConnection = require("../db"); // Importa a função para criar a conexão com o banco de dados
const { Request, TYPES } = require("tedious"); // Importa as classes necessárias do tedious

// GET
  // Todos
  exports.getAllProdutos = (callback) => {
    const connection = createConnection(); // Cria a conexão com o banco de dados
    connection.on("connect", (err) => {
      if (err) {
        return callback(err, null); // Trata erros de conexão
      }
      const query = `SELECT * FROM produtos`; // SQL para buscar todas os usuários
      const request = new Request(query, (err) => {

        if (err) {  
          return callback(err, null); // Trata erros de execução da consulta
        }
      });

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

      // Ao completar a consulta, retorna o array com todos os usuários
      request.on("requestCompleted", (rowCount) => {
        if (rowCount === 0) {
            callback(null, [])
        } else {
            callback(null, result); // Retorna o array de resultados
        }
    });

      connection.execSql(request); // Executa a consulta
    });

    connection.connect(); // Inicia a conexão
};