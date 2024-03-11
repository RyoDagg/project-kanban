const router = require("express").Router();
const projectController = require("./controller");
router.route("/")
.get(projectController.getAll)
.post(projectController.create)


module.exports = router;
