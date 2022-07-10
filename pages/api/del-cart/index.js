import dbConnection from "../../../db/conn";
import Cart from "../../../models/cart";
import Course from "../../../models/course";

export default async function handler(req, res) {
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

    const DELETE_COURSE = await Cart.findOneAndDelete({
      _id: un_enroll_to_this_course._id,
    });

    if (!un_enroll_to_this_course) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Cannot Delete From Cart",
      });
    }

    if (!DELETE_COURSE) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Cannot Delete From Cart",
      });
    }

    const UPDATED_CART_DATA = await Cart.find({});
    if (!UPDATED_CART_DATA) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Cannot Delete From Cart",
      });
    }

    return res.status(200).json({
      success: true,
      data: UPDATED_CART_DATA,
      message: "Yehey! Course is now deleted from your Cart",
    });
  }
}
