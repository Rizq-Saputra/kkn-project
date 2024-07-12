const Sequelize = require('sequelize');
const db = require('../config/database');

const { DataTypes } = Sequelize;

const Peserta = db.define('peserta', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  umur: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nomorHp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jenisKelamin: {
    type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
    allowNull: false,
  },
  nik: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  jawabanBenar: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  point: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

module.exports = Peserta;
