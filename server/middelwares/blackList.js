const blackList = [];

signOutList = (req, res, next) => {
  blackList.push(req.headers["x-token"]);
  next();
};

verifySession = (req, res, next) => {
  if (blackList.includes(req.headers["x-token"])) {
    res.status(405).send("You Are Signed Out");
  } else {
    next();
  }
};

module.exports = { signOutList, verifySession };
