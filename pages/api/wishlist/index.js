import dbConnection from "../../../db/conn";
import Course from "../../../models/course";
import Wishlist from "../../../models/wishlist";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnection();

      const REFRESH_DATA = await Wishlist.find({});
      if (!REFRESH_DATA) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "Cannot get all your Wishlist",
        });
      }

      console.log(REFRESH_DATA);

      return res.status(200).json({
        success: true,
        data: REFRESH_DATA,
        message: "Updated Wishlist",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Cannot get all your Wishlist",
      });
    }
  }

  // #################################################

  if (req.method === "POST") {
    try {
      await dbConnection();

      const { id } = req.body;

      const FIND_COURSE = await Course.findOne({ _id: id });

      // CHECKS IF COURSE ALREADY IN WISHLIST
      const FIND_WISHLIST = await Wishlist.findOne({ _id: id });

      if (FIND_WISHLIST) {
        return res.status(200).json({
          isExist: true,
          data: FIND_COURSE,
          message: "Course Already in Wishlist",
        });
      }
      // END

      if (FIND_COURSE) {
        const ADD_TO_WISHLIST = new Wishlist({
          _id: FIND_COURSE._id,
          title: FIND_COURSE.title,
          inst: FIND_COURSE.inst,
          star: FIND_COURSE.star,
          lessons: FIND_COURSE.lessons,
          enrolled_students: FIND_COURSE.enrolled_students,
          price: FIND_COURSE.price,
          course_img: FIND_COURSE.course_img,
        });

        await ADD_TO_WISHLIST.save().then((result) => {
          if (result) {
            return res.status(200).json({
              success: true,
              data: null,
              message: "Added to your Wishlist",
            });
          }
        });
      }
    } catch (error) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "CANNOT ADD TO YOUR WISHLIST",
      });
    }
  }
}
