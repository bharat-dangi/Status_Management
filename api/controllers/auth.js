const User = require("../models/user");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signUp = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save((err, savedUser) => {
      if (err) {
        return res.status(400).json({
          error: "Unable to save in database",
        });
      }
      savedUser.salt = null;
      savedUser.encrypt_password = null;
      res.json(savedUser);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    await User.findOne({ email }, (err, user) => {
      if (err || !user) {
        return res.status(404).json({ error: "Email is not found" });
      }
      if (!user.authenticate(password)) {
        return res.status(401).json({
          error: "Email and Password doesn't match",
        });
      }

      //Creating token
      const token = jwt.sign({ _id: user._id }, process.env.SECRET);

      //Put token in cookie
      res.cookie("token", token, { expire: new Date() + 9999 });

      //Send response to frontend
      const { _id, firstName, lastName, email, role } = user;
      return res.status(200).json({
        token,
        user: {
          _id,
          firstName,
          lastName,
          email,
          role,
        },
      });
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.signOut = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "User signout successfully",
  });
};

//Protected Routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

//Custom Middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.json(403).json({
      error: "ACCESS DENIED",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "YOU ARE NOT ADMIN",
    });
  }
  next();
};
