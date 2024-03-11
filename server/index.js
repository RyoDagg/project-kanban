const express = require("express");
const sequelize = require("./database/index");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const User = require("./modules/user/model");
const verifyToken = require('./middelwares/verifyToken.js')
const PORT = 3000;
const app = express();


app.use(express.json());
app.use (express.urlencoded({extended :true}))
app.use(cors());

app.get("/api/user/mydata", verifyToken , async (req, res) => {

  res.status(201).send (req.userId)

})

app.post("/api/auth/signin", async (req, res) => {
  
  try {
    const {username,password}=req.body
   const user = await User.findOne({
      where: {
       username,
      },
    });

    if(user.password === password){
      const token = jwt.sign({ id: user.id },
       "ourSecret",
        {
          algorithm: 'HS256',
          allowInsecureKeySizes: true,
          expiresIn: 86400, // 24 hours
        });
       res.send(token)
    }
    else {
      res.send("Invalid password")
    }
    

  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} ✅ ✅`);
});
