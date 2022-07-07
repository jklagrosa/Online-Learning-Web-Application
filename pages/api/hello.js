// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnection from "../../db/conn";
import Course from "../../models/course";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnection();

    const newCourse = new Course(req.body);

    await newCourse
      .save()
      .then((result) => {
        if (result) return res.status(200).json({ result });
      })
      .catch((err) => {
        return res.status(200).json(err.message);
      });
  }
}
