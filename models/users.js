const db = require('./db')

const login = db.sequelize.define('login', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    Matricula: {
        type: db.Sequelize.CHAR,
    },
    
    Senha: {
        type: db.Sequelize.CHAR,
    },

    

})

module.exports = login