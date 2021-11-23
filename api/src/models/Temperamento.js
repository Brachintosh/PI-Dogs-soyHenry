const  { DataTypes, UUID, UUIDV4 } = require('sequelize')

module.exports = (sequelize) => {

    sequelize.define('Temperamento', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

// id: {
//   type: DataTypes.INTEGER,
//   primaryKey: true,
//   allowNull: false,
//   unique: true,
// },
