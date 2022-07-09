import dbConnection from "../../../db/conn";
import Course from "../../../models/course";
import Cart from "../../../models/cart";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      await dbConnection();

      const { cid } = req.body;

      const enroll_to_this_course = await Course.findOneAndUpdate(
        { _id: cid },
        { is_enrolled: true }, // CHANGE TO TRUE AFTER TEST
        {
          new: true,
        }
      );

      if (!enroll_to_this_course) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Something went wrong",
        });
      }

      const ADD_TO_CART = new Cart({
        _id: enroll_to_this_course._id,
        title: enroll_to_this_course.title,
        status: true,
        inst: enroll_to_this_course.inst,
        star: enroll_to_this_course.star,
        lessons: enroll_to_this_course.lessons,
        enrolled_students: enroll_to_this_course.enrolled_students,
        course_img: enroll_to_this_course.course_img,
      });

      await ADD_TO_CART.save().then((result) => {
        if (result) {
          return res.status(200).json({
            success: true,
            data: enroll_to_this_course,
          });
        }
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "Something went wrong",
    });
  }
}
