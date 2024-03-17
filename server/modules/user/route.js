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
router.get("/user/:id/projectin", userController.userProjectsMemeber);

router.post("/user/search", verifyToken, userController.search);

router.get("/user/mydata", verifySession, verifyToken, userController.myData);

module.exports = router;
