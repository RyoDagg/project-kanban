const express = require("express");
const cors = require("cors");
const path = require("path");

const projectRouter = require("./modules/project/route.js");
const taskRouter = require("./modules/task/route.js");
const userRouter = require("./modules/user/route.js");
const fileupload = require("express-fileupload");

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "/storage")));

app.use(fileupload());
app.use(express.json());
app.use(cors());

app.use("/api/project", projectRouter);
app.use("/api/task", taskRouter);
app.use("/api", userRouter);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} ✅ ✅`);
});
