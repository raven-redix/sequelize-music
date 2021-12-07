const {Sequelize , DataTypes, Model} = require('sequelize');

//create a database named 'sequelize' 
//We will add models to this db in index

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite', //type of SQLite database
  storage: './music.sqlite', //file location for db
  logging: false
});

module.exports = {sequelize, DataTypes, Model};