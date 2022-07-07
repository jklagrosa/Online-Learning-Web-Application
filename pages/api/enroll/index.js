import dbConnection from "../../db/conn";
import Course from "../../models/course";
import { BASE_URL } from "../../../config/others";
import { useRouter } from "next/router";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnection();

    const { id } = req.body;

    const router = useRouter();

    const enroll_to_this_course = await Course.findOneAndUpdate(
      { _id: id },
      { is_enrolled: true },
      {
        new: true,
      }
    );

    if (!enroll_to_this_course) {
      return res.status(400).json({
        success: false,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      data: enroll_to_this_course,
    });

    return router.push({
      pathname: "/course/enrolled/[id]",
      query: { id: enroll_to_this_course._id },
    });
  }
}
