const User = require("./model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signin = async (req, res) => {
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
      res.send(token);
    } else {
      res.status(401).send("Invalid password");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const singnup = async (req, res) => {
  console.log(req.body)
  return 
  try {
    const user = await User.create({
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res.send({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const signout = async (req, res) => {
  try {
    res.status(200).send({
      message: "You've been signed out!",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const userProjects = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    const projects = await user.getProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { signin, singnup, signout, userProjects };
