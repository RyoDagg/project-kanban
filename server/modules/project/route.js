const router = require("express").Router();
const projectController = require("./controller");
const verifytoken=require("../../middelwares/verifyToken")
router.route("/")
.get(projectController.getAll)
.post(verifytoken,projectController.create)

router.route('/:id')
.get(projectController.getOneProject)
.delete(projectController.deleteProject)
.put(projectController.update)

router.route('/:id/tasks')
.get(projectController.getAllTasks)

module.exports = router;
