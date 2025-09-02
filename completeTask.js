import { db } from "../../lib/db";

export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({status:"error",message:"Method not allowed"});
  const {taskId} = req.body;
  try {
    // هنا يمكنك إضافة منطق إضافة النقاط للمستخدم
    await db.query("UPDATE users SET points = points + 1 WHERE id = 1"); // مثال تجريبي
    res.json({status:"success",message:"Task completed, point added"});
  } catch(e){
    res.json({status:"error",message:"Failed to complete task"});
  }
}
