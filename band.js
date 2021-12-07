const { sequelize, DataTypes, Model } = require('./db');

class Band extends Model {};

//init is an inherited method from Model that you can use
Band.init({ 
  name: DataTypes.STRING,
  genre: DataTypes.STRING,
  albums: DataTypes.INTEGER
}, {
  sequelize,
  timestamps: false //will show when it was created and ... and add them as new columns to your tables
});

//instances of the model will be the rows; init 

module.exports = { Band };