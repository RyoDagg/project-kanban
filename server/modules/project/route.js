const router = require("express").Router();
const projectController = require("./controller");
router.route("/")
.get(projectController.getAll)
.post(projectController.create)

router.route('/:id')
.get(projectController.getOneProject)

router.route('/:id/tasks')
.get(projectController.getAllTasks)

module.exports = router;
