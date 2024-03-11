const sequelize = require("./");
const User = require("../modules/user/model");
const Project = require("../modules/project/model");

(async () => {
  await sequelize.sync({ force: true });
})();
