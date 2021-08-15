const express = require("express");
const { signUp, signIn, signOut } = require("../controllers/auth");
const router = express.Router();

//Creating a new user
router.post("/signup", signUp);

//Log In user
router.post("/signin", signIn);

//Sign out the user
router.get("/signout", signOut);

module.exports = router;
