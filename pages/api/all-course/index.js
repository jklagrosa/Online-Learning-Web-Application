import dbConnection from "../../../db/conn";
import Course from "../../../models/course";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      await dbConnection();
      const GET_ALL_COURSE = await Course.find({});
      if (!GET_ALL_COURSE) {
        return res.status(400).json({
          success: false,
          data: null,
        });
      }

      return res.status(200).json({
        success: true,
        data: GET_ALL_COURSE,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: null,
    });
  }
}
