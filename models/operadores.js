const { Model, DataTypes } = require('sequelize');

class Operadores extends Model {
  static init(sequelize) {
    super.init({
        matricula: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        senha: DataTypes.STRING,
        setor: DataTypes.STRING,
        turno: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
  static associate(models){
      this.hasMany(models.Coletor, {foreignKey: 'idoperadores', as: 'coletors' });
  }
}

module.exports = Operadores