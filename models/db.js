const Sequelize = require('sequelize')

const database = new Sequelize('smp-br-app', 'root','', {host: 'localhost', dialect: 'mysql' })

module.exports = {
    Sequelize: Sequelize,
    database: database
}
