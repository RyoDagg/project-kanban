const sequelize = require("./");
const User = require("../modules/user/model");
const Project = require("../modules/project/model");
const Task = require("../modules/task/model");

(async () => {
  await sequelize.sync({ force: true });
})();
