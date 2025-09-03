import { useEffect, useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch("/api/getTasks");
    const data = await res.json();
    if(data.status==="success") setTasks(data.tasks);
    else alert(data.message);
  }

  const completeTask = async (taskId) => {
    const res = await fetch("/api/completeTask", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({taskId})
    });
    const data = await res.json();
    alert(data.message);
    fetchTasks();
  }

  useEffect(()=>{ fetchTasks(); }, []);

  return (
    <div>
      <h1>Tasks - PointsHub</h1>
      {tasks.length === 0 && <p>No tasks available</p>}
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.title} - Reward: {t.reward_points} point(s)
            <button onClick={()=>completeTask(t.id)}>Complete</button>
          </li>
        ))}
      </ul>
      <p><a href="/dashboard">Dashboard</a></p>
    </div>
  );
}
