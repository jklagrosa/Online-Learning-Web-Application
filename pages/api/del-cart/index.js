import dbConnection from "../../../db/conn";
import Cart from "../../../models/cart";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnection();

    const { id } = req.body;

    const DELETE_COURSE = await Cart.findOneAndDelete({ _id: id });
    if (!DELETE_COURSE) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Cannot Delete From Cart",
      });
    }

    return res.status(200).json({
      success: true,
      data: DELETE_COURSE,
      message: "Yehey! Course is now deleted from your Cart",
    });
  }
}
