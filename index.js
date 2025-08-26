const express = require('express');
const app = express();

const UserRouter = require('./routes/UserRotes'); // ou ajuste o caminho se estiver diferente

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usa o router
app.use('/', UserRouter); 


app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
