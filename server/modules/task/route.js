const router = require("express").Router();
const taskController=require("./controller")
router.route("/")
.get(taskController.getAll)
.post(taskController.create)
router.route('/:id')
.delete(taskController.remove)
.put(taskController.updateTask)
module.exports = router;