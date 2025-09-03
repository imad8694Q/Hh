import { useEffect, useState } from "react";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await fetch("/api/transactions");
    const data = await res.json();
    if(data.status==="success") setTransactions(data.transactions);
    else alert(data.message);
  }

  useEffect(()=>{ fetchTransactions(); }, []);

  return (
    <div>
      <h1>Dashboard - PointsHub</h1>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            Task: {tx.title}, Points: {tx.points}, Reward: ${tx.reward_usd}
          </li>
        ))}
      </ul>
      <p><a href="/tasks">Back to Tasks</a></p>
    </div>
  );
    }
