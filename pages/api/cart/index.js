import dbConnection from "../../../db/conn";
import Cart from "../../../models/cart";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnection();

      const REFRESH_DATA = await Cart.find({});
      if (!REFRESH_DATA) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Cannot get all your Cart",
        });
      }

      console.log(REFRESH_DATA);

      return res.status(200).json({
        success: true,
        data: REFRESH_DATA,
        message: "Updated Cart",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Cannot get all your Cart",
      });
    }
  }

  //   if (req.method === "POST") {
  //     try {
  //       await dbConnection();

  //       const { id } = req.body;

  //       const FIND_COURSE = await Course.findOne({ _id: id });

  //       // CHECKS IF COURSE ALREADY IN Cart
  //       const FIND_CART = await Cart.findOne({ _id: id });

  //       if (FIND_CART) {
  //         return res.status(200).json({
  //           isExist: true,
  //           data: FIND_COURSE,
  //           message: "Course Already in Cart",
  //         });
  //       }
  //       // END

  //       if (FIND_COURSE) {
  //         const ADD_TO_CART = new Cart({
  //           _id: FIND_COURSE._id,
  //           title: FIND_COURSE.title,
  //           status: true,
  //           inst: FIND_COURSE.inst,
  //           star: FIND_COURSE.star,
  //           lessons: FIND_COURSE.lessons,
  //           enrolled_students: FIND_COURSE.enrolled_students,
  //           course_img: FIND_COURSE.course_img,
  //         });

  //         await ADD_TO_CART.save().then((result) => {
  //           if (result) {
  //             return res.status(200).json({
  //               success: true,
  //               data: null,
  //               message: "Added to your Cart",
  //             });
  //           }
  //         });
  //       }
  //     } catch (error) {
  //       return res.status(400).json({
  //         success: false,
  //         data: null,
  //         message: "CANNOT ADD TO YOUR CART",
  //       });
  //     }
  //   }
}
