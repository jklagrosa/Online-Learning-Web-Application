import dbConnection from "../../../db/conn";
import User from "../../../models/user";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      await dbConnection();

      const { username, password } = req.body;
      const GET_USER = await User.findOne({
        username: username,
        password: password,
      });

      if (!GET_USER) {
        return res.status(400).json({
          success: false,
          data: null,
          message: "User Not Found.",
        });
      }

      return res.status(400).json({
        success: true,
        data: GET_USER,
        message: "User Is Now LoggedIn.",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      data: null,
      message: error,
    });
  }
}
