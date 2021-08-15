const User = require("../models/user");

exports.getUserById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    req.profile = user;
  } catch (error) {
    res.status(500).json(error);
  }
  next();
};

exports.fetchAllUsers = async (req, res) => {
  try {
    const fetchedUsers = await User.find();
    const filteredUsers = fetchedUsers.filter(
      (u) => u.email != req.profile.email
    );

    filteredUsers.map((u) => {
      u.role = null;
      u.salt = null;
      u.encrypt_password = null;
      u.createdAt = null;
      u.updatedAt = null;
    });

    res.status(200).json(filteredUsers);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
