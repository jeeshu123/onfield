import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//   const [username, setUsername] = useState("Jeeshan");
//   const [password, setPassword] = useState("jeeshan123");
//   const { validateUser } = useAuthContext();

//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     const user = validateUser(username, password);
//     if (user) navigate("/app");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>User Name</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

export default function Login() {
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {isLoading && <span className="loader"></span>}
      <form
        className={`bg-white p-6 rounded-lg shadow-md w-96  text-xs md:text-sm ${
          isLoading ? "blur-sm" : ""
        }`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <p className="text-xs text-red-800">{errorMessage}</p>
        {/* Username Field */}
        <div className="relative mb-6">
          <input
            type="text"
            id="username"
            className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              usernameFocus || usernameFocus === "" ? "pt-6" : "pt-3"
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
              passwordFocus || passwordFocus === "" ? "pt-6" : ""
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
          Login
        </button>
        <Link
          to="/signup"
          className="text-xs font-medium flex items-center py-4"
        >
          Dont have an account. Create Now! &rarr;
        </Link>
      </form>
    </div>
  );
}
