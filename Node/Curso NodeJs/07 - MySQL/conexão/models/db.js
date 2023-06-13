const Sequelize = require('sequelize')

const conn = new Sequelize('nodemysql', 'root', 'Etel@001', {
    host: 'localhost',
    dialect: 'mysql'
})

conn.authenticate().then(function () {
    console.log('Conectado ao Banco de Dados')
}).catch(function () {
    console.log('Erro ao conectar ao banco de dados')
})
module.exports = conn