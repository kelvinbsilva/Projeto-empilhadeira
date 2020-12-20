const Sequelize = require('sequelize')

const sequelize = new Sequelize('smp-br-app', 'root','', {host: 'localhost', dialect: 'mysql' })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
