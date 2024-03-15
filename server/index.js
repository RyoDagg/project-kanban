const express = require("express");
const cors = require("cors");
const path = require("path");

const User = require("./modules/user/model");
const verifyToken = require("./middelwares/verifyToken.js");
const projectRouter = require("./modules/project/route.js");
const taskRouter = require("./modules/task/route.js");
const userRouter = require("./modules/user/route.js");
const fileupload = require("express-fileupload");

const { verifySession } = require("./middelwares/blackList.js");

const PORT = 3000;

const app = express();

app.use(fileupload());
app.use(express.json());
app.use(cors());

app.use("/api/project", projectRouter);
app.use("/api/task", taskRouter);
app.use("/api", userRouter);

app.use(express.static(path.join(__dirname, "/storage")));

app.get("/api/user/mydata", verifySession, verifyToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);
    res.send(user);
  } catch (error) {
    res.status(404).send("error fetching user");
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} ✅ ✅`);
});
