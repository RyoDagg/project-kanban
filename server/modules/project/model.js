const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../database/index");
const User = require("../user/model");

const Project = sequelize.define("project", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

User.hasMany(Project);
Project.belongsTo(User);

Project.belongsToMany(User, { through: "userProject", as: "Users" });
User.belongsToMany(Project, { through: "userProject", as: "ProjectsIn" });

module.exports = Project;
