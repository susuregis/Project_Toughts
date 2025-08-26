const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('meu_banco', 'user', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

async function startApp() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida com o banco de dados!');

    // Sincroniza os modelos com o banco (cria as tabelas se não existirem)
    await sequelize.sync();
    console.log('Modelos sincronizados com o banco!');

    // Aqui você pode iniciar seu servidor Express, por exemplo
  } catch (err) {
    console.error('Erro ao conectar ou sincronizar banco:', err);
  }
}

// Só execute a função startApp() uma vez no início do seu app
startApp();

module.exports = sequelize;
