const sequelize = require("./");
const User = require("../modules/user/model");

(async () => {
  await sequelize.sync({ force: true });
})();
