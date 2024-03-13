const sequelize = require("./");
const User = require("../modules/user/model");
const Project = require("../modules/project/model");
const Task = require("../modules/task/model");

const users = require("../data/users.json");
const projects = require("../data/projects.json");
const tasks = require("../data/tasks.json");

(async () => {
  await (async () => {
    try {
      await User.bulkCreate(users);
      console.log("Users seeded successfully!!");
    } catch (error) {
      console.log("Users seeding Error!!", error);
    }
  })();

  await (async () => {
    try {
      await Project.bulkCreate(projects);
      console.log("Users seeded successfully!!");
    } catch (error) {
      console.log("Users seeding Error!!", error);
    }
  })();

  await (async () => {
    try {
      await Task.bulkCreate(tasks);
      console.log("Users seeded successfully!!");
    } catch (error) {
      console.log("Users seeding Error!!", error);
    }
  })();
})();
