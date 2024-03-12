const Sequelize = require("sequelize");
const {database,password,host,username,dialect}=require("config")
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully. ✅"))
  .catch((error) =>
    console.error("Unable to connect to the database ❌:", error)
  );
module.exports = sequelize;
