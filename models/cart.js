import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
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
  course_img: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

export default mongoose.model("cart", cartSchema);
