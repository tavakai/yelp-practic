const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Restoraunt extends Model {
    static associate(models) {
      this.hasMany(models.Favorite, { foreignKey: 'rest_id' });
    }
  }
  Restoraunt.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Restoraunt',
  });
  return Restoraunt;
};
