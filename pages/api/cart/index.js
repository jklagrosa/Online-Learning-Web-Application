import dbConnection from "../../../db/conn";
import Course from "../../../models/course";
import Cart from "../../../models/cart";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnection();

    

  }
}
