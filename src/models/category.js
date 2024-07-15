// models/category.js
const Sequelize = require('sequelize');
const db = require('../config/database');

const { DataTypes } = Sequelize;

const Category = db.define('category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gambar: {
    type: DataTypes.STRING(2048),
  },
}, {
  freezeTableName: true,
});

module.exports = Category;
