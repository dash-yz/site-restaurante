// Responsável por instanciar o servidor
const express = require("express");
const app = express();
const cors = require("cors")
const restauranteRoutes = require("./routes/restauranteRoutes"); // Importa as rotas de professores

const PORT = 3000

// Habilita CORS para permitir requisições de origens diferentes
app.use(cors())

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Usa as rotas definidas no arquivo userRoutes
app.use(restauranteRoutes);

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});