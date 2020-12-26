const { Model, DataTypes } = require('sequelize');

class Empilhadeiras extends Model {
  static init(sequelize) {
    super.init({
        numero: DataTypes.INTEGER,
        modelo: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Empilhadeiras