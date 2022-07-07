import dbConnection from "../../../db/conn";
import Course from "../../../models/course";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnection();

    const { cid } = req.body;

    const enroll_to_this_course = await Course.findOneAndUpdate(
      { _id: cid },
      { is_enrolled: false }, // CHANGE TO TRUE AFTER TEST
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

    return res.status(200).json({
      success: true,
      data: enroll_to_this_course,
    });
  }
}
