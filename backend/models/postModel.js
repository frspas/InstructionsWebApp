const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  userName: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, default: null },
  subject: { type: String },
  jobType: { type: String },
  userId: { type: String, required: true },
  rate: { type: Number, required: true },
  date: { type: Date, required: true },
  userImg: { type: String },
});

const model = mongoose.model("posts", Post);

module.exports = model;
