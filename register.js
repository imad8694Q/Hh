import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    });
    const data = await res.json();
    alert(data.message);
    if(data.status === "success") window.location.href="/";
  }

  return (
    <div>
      <h1>Register - PointsHub</h1>
      <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p>Or <a href="/">Login</a></p>
    </div>
  );
                                                                              }
