import dbConnection from "../../../db/conn";
import User from "../../../models/user";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      await dbConnection();
      
    }
  } catch (error) {
    
  }
}
