const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const session = require("express-session");

const User = require("./modules/user/model");
const verifyToken = require("./middelwares/verifyToken.js");
const projectRouter = require("./modules/project/route.js");
const taskRouter = require("./modules/task/route.js");

const { signOutList, verifySession } = require("./middelwares/blackList.js");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "serrek fi bir",
  })
);

app.use("/api/project", projectRouter);
app.use("/api/task", taskRouter);

app.get("/api/user/mydata", verifySession, verifyToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId);
    res.send(user);
  } catch (error) {
    res.status(404).send("error fetching user");
  }
});

app.post("/api/auth/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: {
        username,
      },
    });

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (isValidPassword) {
      const token = jwt.sign({ id: user.id }, "ourSecret", {
        algorithm: "HS256",
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
      });
      req.session.token = token;
      res.send(token);
    } else {
      res.send("Invalid password");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

app.post("/api/auth/signup", async (req, res) => {
  try {
    const user1 = await User.create({
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res.send({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/auth/signout", signOutList, async (req, res) => {
  try {
    // console.log(req.session);
    // return;
    // req.session.destroy();
    req.session = null;
    res.status(200).send({
      message: "You've been signed out!",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} ✅ ✅`);
});
