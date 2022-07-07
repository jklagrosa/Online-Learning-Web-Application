import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  inst: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
    required: true,
  },
  lessons: {
    type: Number,
    required: true,
  },
  enrolled_students: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  course_img: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

export default mongoose.model("wishlist", wishlistSchema);
