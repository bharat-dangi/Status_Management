const express = require("express");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { fetchAllUsers, getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);

router.get("/:userId", isSignedIn, isAuthenticated, isAdmin, fetchAllUsers);

module.exports = router;
