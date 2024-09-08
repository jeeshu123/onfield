import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("Jeeshan");
  const [password, setPassword] = useState("jeeshan123");
  const { validateUser } = useAuthContext();

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const user = validateUser(username, password);
    if (user) navigate("/app");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
