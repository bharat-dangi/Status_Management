const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: String,
    title: String,
    message: String,
    selectedFile: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
