const Post = require("../models/post");
const mongoose = require("mongoose");

exports.createPost = async (req, res) => {
  const { title, message, selectedFile, userId } = req.body;

  const newPost = new Post({ userId, title, message, selectedFile });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  const { userId } = req.params;
  try {
    const post = await Post.find({ userId: userId });

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { userId, title, message, selectedFile } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { userId, title, message, selectedFile, _id: id };

  await Post.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    await Post.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
