const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../database");

const User = sequelize.define("user", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profession: DataTypes.TEXT,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  photo: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
