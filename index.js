const {sequelize, DataTypes, Model} = require('./db');
const {Musician} = require('./musician');
const {Band} = require('./band');

//
Musician.belongsTo(Band); //adds a foreign key to musician table connecting a musician instance to a specific Band
//gives us sequelize methods for a one to may relationship
Band.hasMany(Musician); 

//export models with added associations 
module.exports = { Musician, Band }