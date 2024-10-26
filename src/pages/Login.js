import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Navbar from "../components/NavBar";

export default function Login() {
  const [username, setUsername] = useState("ashfaq@gmail.com");
  const [password, setPassword] = useState("ashfaq123");
  const { validateUser, errorMessage, isLoading } = useAuthContext();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const user = await validateUser({ username, password });
    if (user) navigate("/app");
    // if (user) console.log("Okay");
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] min-h-screen px-4 md:px-0">
        <div className="bg-green-600/50 flex flex-col px-4 py-8 text-green-200 relative">
          {isLoading && <span className="loader"></span>}
          <p className="font-bold text-center text-3xl tracking-wide mb-6">
            Welcome Back
          </p>
          <div className="flex gap-2 justify-center mb-4">
            <FaGoogle className="border-green-200 border-2 rounded-full text-4xl p-1" />
          </div>
          <p className="text-sm mb-4 ">or use your account.</p>
          <p className="text-sm text-red-900">{errorMessage}</p>
          <div className="flex flex-col gap-4 mb-4">
            <input
              className="bg-green-100 text-stone-800 p-2 rounded-md"
              placeholder="Email"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="bg-green-100 text-stone-800 p-2 rounded-md"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-xs mb-6">Forgot your password ?</p>
          <button
            className="bg-green-900 text-2xl px-4 py-1 rounded-xl border-2 border-stone-300"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
        <div className="hidden md:block">
          AA{/* <img src={image} alt="" /> */}
        </div>
      </div>
    </>
  );
}
