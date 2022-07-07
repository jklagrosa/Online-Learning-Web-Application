import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
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
  tag: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  course_level: {
    type: String,
    required: true,
  },
  course_duration: {
    type: Number,
    required: true,
  },

  course_quiz: {
    type: Number,
    required: true,
  },
  course_percent: {
    type: Number,
    required: true,
  },
  course_cert: {
    type: String,
    required: true,
  },
  course_lang: {
    type: String,
    required: true,
  },
  course_img: {
    type: String,
    required: true,
  },
  is_enrolled: {
    type: Boolean,
    required: true,
  },
  learning: [String],
  vids: [String],
});

mongoose.models = {};

export default mongoose.model("courses", courseSchema);
