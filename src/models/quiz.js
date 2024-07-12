const Sequelize = require('sequelize');
const db = require('../config/database');
const Category = require('./category');

const { DataTypes } = Sequelize;

const Quiz = db.define('quiz', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  soal: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  jawaban: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  jawabanBenar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kategoriId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  point: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

Category.hasMany(Quiz, { foreignKey: 'kategoriId' });
Quiz.belongsTo(Category, { foreignKey: 'kategoriId' });

module.exports = Quiz;
