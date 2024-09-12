import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Signup() {
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [fullnameFocus, setFullnameFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");

  const { createUser } = useAuthContext();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = createUser(username, password, email, fullname);
    if (newUser) navigate("/app");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Signup</h2>

        {/* Fullname Field */}
        <div className="relative mb-6">
          <input
            type="text"
            id="fullname"
            className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              fullnameFocus || fullname === "" ? "pt-6" : ""
            }`}
            onFocus={() => setFullnameFocus(true)}
            onBlur={(e) => setFullnameFocus(e.target.value !== "")}
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
          />
          <label
            htmlFor="fullname"
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
              fullnameFocus ? "top-0 text-xs text-blue-500" : ""
            }`}
          >
            Fullname
          </label>
        </div>

        {/* Email Field */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              emailFocus || email === "" ? "pt-6" : ""
            }`}
            onFocus={() => setEmailFocus(true)}
            onBlur={(e) => setEmailFocus(e.target.value !== "")}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label
            htmlFor="email"
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
              emailFocus ? "top-0 text-xs text-blue-500" : ""
            }`}
          >
            Email
          </label>
        </div>

        {/* Username Field */}
        <div className="relative mb-6">
          <input
            type="text"
            id="username"
            className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              usernameFocus || username === "" ? "pt-6" : ""
            }`}
            onFocus={() => setUsernameFocus(true)}
            onBlur={(e) => setUsernameFocus(e.target.value !== "")}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label
            htmlFor="username"
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
              usernameFocus ? "top-0 text-xs text-blue-500" : ""
            }`}
          >
            Username
          </label>
        </div>

        {/* Password Field */}
        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              passwordFocus || password === "" ? "pt-6" : ""
            }`}
            onFocus={() => setPasswordFocus(true)}
            onBlur={(e) => setPasswordFocus(e.target.value !== "")}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label
            htmlFor="password"
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
              passwordFocus ? "top-0 text-xs text-blue-500" : ""
            }`}
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Signup
        </button>
        <Link to="/login" className="text-xs font-medium flex items-center py-4">
          Already have an account? Login Now! &rarr;
        </Link>
      </form>
    </div>
  );
}
