const router = require("express").Router();

const verifyToken = require("../../middelwares/verifyToken.js");
const {
  signOutList,
  verifySession,
} = require("../../middelwares/blackList.js");

const userController = require("./controller");

router.post("/auth/signin", userController.signin);
router.post("/auth/signup", userController.singnup);
router.get("/auth/signout", signOutList, userController.signout);
router.get("/user/:id/projects", userController.userProjects);
router.post("/user/search", userController.search);

module.exports = router;
