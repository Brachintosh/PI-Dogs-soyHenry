const  { DataTypes, UUID, UUIDV4 } = require('sequelize')

module.exports = (sequelize) => {

    sequelize.define('Temperamento', {
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
  });
};
