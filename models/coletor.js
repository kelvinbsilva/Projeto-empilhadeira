const {
    Model,
    DataTypes
} = require('sequelize');

class Coletor extends Model {
    static init(sequelize) {
        super.init({
            hora_f: DataTypes.INTEGER,
            hora_i: DataTypes.INTEGER,
            obs: DataTypes.STRING,
            assento: DataTypes.INTEGER,
            coletor: DataTypes.INTEGER,
            embreagem: DataTypes.INTEGER,
            extintor: DataTypes.INTEGER,
            freios: DataTypes.INTEGER,
            garfo: DataTypes.INTEGER,
            limpo: DataTypes.INTEGER,
            mangueiras: DataTypes.INTEGER,
            pintura: DataTypes.INTEGER,
            sistema_ilum: DataTypes.INTEGER,
            torre: DataTypes.INTEGER,
            agua_radiador: DataTypes.INTEGER,
            botijao: DataTypes.INTEGER,
            nivel_oleo: DataTypes.INTEGER,
            oleo_motor: DataTypes.INTEGER,
            correntes: DataTypes.INTEGER,
            pneus: DataTypes.INTEGER,
            
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Operadores, {
            foreignKey: 'idoperadores',
            as: 'operadores'
        });
        this.belongsTo(models.Empilhadeiras, {
            foreignKey: 'idempilhadeiras',
            as: 'empilhadeiras'
        });
    }
}

module.exports = Coletor;