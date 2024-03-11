const express = require("express");
const sequelize =require("./database/index")
const cors = require("cors");
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} ✅ ✅`);
});
