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

    const UPDATED_WISHLIST = await Wishlist.find({});
    if (!UPDATED_WISHLIST) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Cannot Update Your Wishlist",
      });
    }

    return res.status(200).json({
      success: true,
      data: UPDATED_WISHLIST,
      message: "Yehey! Course is now deleted from your WishList",
    });
  }
}
