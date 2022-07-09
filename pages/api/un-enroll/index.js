import dbConnection from "../../../db/conn";
import Course from "../../../models/course";
import Cart from "../../../models/cart";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      await dbConnection();

      const { id } = req.body;

      const un_enroll_to_this_course = await Course.findOneAndUpdate(
        { _id: id },
        { is_enrolled: false }, // UN-ENROLL: CHANGE TO FALSE
        {
          new: true,
        }
      );

      const removed_from_cart = await Cart.findOneAndDelete({
        _id: un_enroll_to_this_course._id,
      });

      if (!un_enroll_to_this_course) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Something went wrong",
        });
      }

      if (!removed_from_cart) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Something went wrong",
        });
      }

      return res.status(200).json({
        success: true,
        data: un_enroll_to_this_course,
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
