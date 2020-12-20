const db = require('./db')

const Empilhadeiras = db.sequelize.define('empilhadeiras', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    numero: {
        type: db.Sequelize.INTEGER
    },
    modelo: {
        type: db.Sequelize.STRING,
    },

})
module.exports = Empilhadeiras