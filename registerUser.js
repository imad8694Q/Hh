import { db } from "../../lib/db";
import bcrypt from "bcryptjs";

export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({status:"error",message:"Method not allowed"});
  const {username,email,password} = req.body;
  const hash = await bcrypt.hash(password,10);
  try {
    await db.query("INSERT INTO users (username,email,password_hash) VALUES (?,?,?)",[username,email,hash]);
    res.json({status:"success",message:"User registered"});
  } catch(e){
    res.json({status:"error",message:"Registration failed"});
  }
}
