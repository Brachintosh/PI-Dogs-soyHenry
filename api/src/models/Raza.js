const { DataTypes, UUID, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Raza', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
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
      type: DataTypes.STRING,

    },
    image: {
      type: DataTypes.STRING,

    },
    breed_group: {
      type: DataTypes.STRING,

    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};