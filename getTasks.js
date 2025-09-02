import { db } from "../../lib/db";

export default async function handler(req,res){
  if(req.method!=="GET") return res.status(405).json({status:"error",message:"Method not allowed"});
  try {
    const [rows] = await db.query("SELECT id,title,reward_points FROM tasks");
    res.json({status:"success",tasks:rows});
  } catch(e){
    res.json({status:"error",message:"Failed to fetch tasks"});
  }
}
