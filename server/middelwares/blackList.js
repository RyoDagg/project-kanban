const blackList = [];

signOutList = (req, res, next) => {
  blackList.push(req.headers["x-token"]);
  next();
};

verifySession = (req, res, next) => {
  if (blackList.includes(req.headers["x-token"])) {
    res.status(405).send("rak makech connecté");
  } else {
    next();
  }
};

module.exports = { signOutList, verifySession };
