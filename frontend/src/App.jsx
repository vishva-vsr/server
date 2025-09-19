import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.json())
      .then(data => setMessage(data.message || data.error));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Three-Tier App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
