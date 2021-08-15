const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/post");
const { getUserById } = require("../controllers/user");

const router = express.Router();

router.param("userId", getUserById);

router.get("/:userId", isSignedIn, getPosts);
router.post("/:userId", isSignedIn, isAuthenticated, createPost);
router.patch("/:id/:userId", isSignedIn, isAuthenticated, updatePost);
router.delete("/:id/:userId", isSignedIn, isAuthenticated, deletePost);

module.exports = router;
