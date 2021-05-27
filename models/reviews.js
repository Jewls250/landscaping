const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  userName: { type: String, required: true },
  userComment: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
