const db = require('./db')

const Operadores = db.sequelize.define('operadores', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    matricula: {
        type: db.Sequelize.INTEGER
    },
    nome: {
        type: db.Sequelize.STRING,
    },
    senha: {
        type: db.Sequelize.STRING,
    },
    setor: {
        type: db.Sequelize.STRING,
    },
    turno: {
        type: db.Sequelize.INTEGER,
    },
    createdAt: {
        type: db.Sequelize.DATE,
    },
    updatedAt: {
        type: db.Sequelize.DATE,
    }


})
module.exports = Operadores