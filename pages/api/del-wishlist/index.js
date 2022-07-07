import dbConnection from "../../../db/conn";
import Wishlist from "../../../models/wishlist";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnection();

    const { id } = req.body;

    const DELETE_COURSE = await Wishlist.findOneAndDelete({ _id: id });
    if (!DELETE_COURSE) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Cannot Delete From WishList",
      });
    }

    return res.status(200).json({
      success: true,
      data: DELETE_COURSE,
      message: "Yehey! Course is now deleted from your WishList",
    });
  }
}
