import { db } from "../../lib/db";

export default async function handler(req,res){
  if(req.method!=="GET") return res.status(405).json({status:"error",message:"Method not allowed"});
  try {
    const [rows] = await db.query("SELECT t.id, u.username, t.title, t.points, t.reward_usd FROM transactions t JOIN users u ON t.user_id = u.id");
    res.json({status:"success",transactions:rows});
  } catch(e){
    res.json({status:"error",message:"Failed to fetch transactions"});
  }
}
