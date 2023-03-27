const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { HttpError } = require("../helpers");

const { SECRET_KEY } = process.env;

const authentication = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    const { email } = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({email});
    if (bearer !== "Bearer" || !user || !user.token || user.token !== token) {
      next(HttpError(401, "Not authorized"));
    }
    req.user = user;

    next();
  } catch (e) {
    next(HttpError(401, e.message));
  }
};

module.exports = authentication;
