import { db } from "../../lib/db";
import bcrypt from "bcryptjs";

export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({status:"error",message:"Method not allowed"});
  const {email,password} = req.body;
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email=?",[email]);
    if(rows.length===0) return res.json({status:"error",message:"User not found"});
    const user = rows[0];
    const match = await bcrypt.compare(password,user.password_hash);
    if(!match) return res.json({status:"error",message:"Wrong password"});
    res.json({status:"success",message:"Logged in successfully"});
  } catch(e){
    res.json({status:"error",message:"Login failed"});
  }
}
