const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id :{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue : DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    plataformas:{
      type : DataTypes.ENUM('PC','PlayStation','XboxOne','Nintendo Switch','IOS','Android'),
      allowNull : false,
    },
    imagen:{
      type : DataTypes.STRING,
      allowNull : false,
    },
    fechaLanzamiento:{
      type : DataTypes.DATEONLY,
      allowNull: false,
    },
    rating: {
      type : DataTypes.DECIMAL,
      allowNull : false,
    },
  });
};
