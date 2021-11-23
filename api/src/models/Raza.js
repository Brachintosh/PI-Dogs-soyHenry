const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Raza', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
    },
    minHeight: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    maxHeight: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    minWeight: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    maxWeight: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    lifeSpan: {
      type: DataTypes.INTEGER,

    },
    image: {
      type: DataTypes.STRING,

    },
    breed_group: {
      type: DataTypes.STRING,

    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });
};