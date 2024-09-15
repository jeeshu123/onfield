// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";

// export default function Signup() {
//   const [usernameFocus, setUsernameFocus] = useState(false);
//   const [passwordFocus, setPasswordFocus] = useState(false);
//   const [emailFocus, setEmailFocus] = useState(false);
//   const [fullnameFocus, setFullnameFocus] = useState(false);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [fullname, setFullname] = useState("");

//   const { createUser } = useAuthContext();
//   const navigate = useNavigate();

//   function handleSubmit(event) {
//     event.preventDefault();
//     const newUser = createUser(username, password, email, fullname);
//     if (newUser) navigate("/app");
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         className="bg-white p-6 rounded-lg shadow-md w-96"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-2xl font-bold mb-8 text-center">Signup</h2>

//         {/* Fullname Field */}
//         <div className="relative mb-6">
//           <input
//             type="text"
//             id="fullname"
//             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
//               fullnameFocus || fullname === "" ? "pt-6" : ""
//             }`}
//             onFocus={() => setFullnameFocus(true)}
//             onBlur={(e) => setFullnameFocus(e.target.value !== "")}
//             onChange={(e) => setFullname(e.target.value)}
//             value={fullname}
//           />
//           <label
//             htmlFor="fullname"
//             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
//               fullnameFocus ? "top-0 text-xs text-blue-500" : ""
//             }`}
//           >
//             Fullname
//           </label>
//         </div>

//         {/* Email Field */}
//         <div className="relative mb-6">
//           <input
//             type="email"
//             id="email"
//             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
//               emailFocus || email === "" ? "pt-6" : ""
//             }`}
//             onFocus={() => setEmailFocus(true)}
//             onBlur={(e) => setEmailFocus(e.target.value !== "")}
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//           />
//           <label
//             htmlFor="email"
//             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
//               emailFocus ? "top-0 text-xs text-blue-500" : ""
//             }`}
//           >
//             Email
//           </label>
//         </div>

//         {/* Username Field */}
//         <div className="relative mb-6">
//           <input
//             type="text"
//             id="username"
//             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
//               usernameFocus || username === "" ? "pt-6" : ""
//             }`}
//             onFocus={() => setUsernameFocus(true)}
//             onBlur={(e) => setUsernameFocus(e.target.value !== "")}
//             onChange={(e) => setUsername(e.target.value)}
//             value={username}
//           />
//           <label
//             htmlFor="username"
//             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
//               usernameFocus ? "top-0 text-xs text-blue-500" : ""
//             }`}
//           >
//             Username
//           </label>
//         </div>

//         {/* Password Field */}
//         <div className="relative mb-6">
//           <input
//             type="password"
//             id="password"
//             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
//               passwordFocus || password === "" ? "pt-6" : ""
//             }`}
//             onFocus={() => setPasswordFocus(true)}
//             onBlur={(e) => setPasswordFocus(e.target.value !== "")}
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//           />
//           <label
//             htmlFor="password"
//             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
//               passwordFocus ? "top-0 text-xs text-blue-500" : ""
//             }`}
//           >
//             Password
//           </label>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
//         >
//           Signup
//         </button>
//         <Link
//           to="/login"
//           className="text-xs font-medium flex items-center py-4"
//         >
//           Already have an account? Login Now! &rarr;
//         </Link>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Signup() {
  const [formFocus, setFormFocus] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [required, setRequired] = useState("");

  const { createUser, isLoading } = useAuthContext();
  const navigate = useNavigate();

  const handleFocus = (field) => {
    setFormFocus((prevFocus) => ({
      ...prevFocus,
      [field]: true,
    }));
  };

  const handleBlur = (field, value) => {
    setFormFocus((prevFocus) => ({
      ...prevFocus,
      [field]: value !== "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.firstName) {
      setRequired("Fill all Required Fields.");
      return;
    }
    setRequired("");
    const newUser = await createUser(formData);
    console.log(newUser);
    if (newUser) navigate("/login");
    setRequired("User Already Registered");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 relative">
      {isLoading && <span className="loader"></span>}
      <form
        className={`bg-white p-6 rounded-lg shadow-md w-96 relative text-xs md:text-sm ${
          isLoading ? "blur-sm" : ""
        }`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        <p className="py-4 text-red-500/90 tracking-wide text-xs md:text-sm">
          {required}
        </p>

        {/* First Name Field */}
        <div className="relative mb-6">
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              formFocus.firstName || formData.firstName === "" ? "pt-6" : ""
            }`}
            onFocus={() => handleFocus("firstName")}
            onBlur={(e) => handleBlur("firstName", e.target.value)}
            onChange={handleChange}
            value={formData.firstName}
          />
          <label
            htmlFor="firstName"
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
              formFocus.firstName ? "top-0 text-xs text-blue-500" : ""
            }`}
          >
            First Name
          </label>
        </div>

        {/* Last Name Field */}
        <div className="relative mb-6">
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              formFocus.lastName || formData.lastName === "" ? "pt-6" : ""
            }`}
            onFocus={() => handleFocus("lastName")}
            onBlur={(e) => handleBlur("lastName", e.target.value)}
            onChange={handleChange}
            value={formData.lastName}
          />
          <label
            htmlFor="lastName"
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
              formFocus.lastName ? "top-0 text-xs text-blue-500" : ""
            }`}
          >
            Last Name
          </label>
        </div>

        {/* Email Field */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            name="email"
            className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              formFocus.email || formData.email === "" ? "pt-6" : ""
            }`}
            onFocus={() => handleFocus("email")}
            onBlur={(e) => handleBlur("email", e.target.value)}
            onChange={handleChange}
            value={formData.email}
          />
          <label
            htmlFor="email"
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
              formFocus.email ? "top-0 text-xs text-blue-500" : ""
            }`}
          >
            Email
          </label>
        </div>

        {/* Password Field */}
        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            name="password"
            className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              formFocus.password || formData.password === "" ? "pt-6" : ""
            }`}
            onFocus={() => handleFocus("password")}
            onBlur={(e) => handleBlur("password", e.target.value)}
            onChange={handleChange}
            value={formData.password}
          />
          <label
            htmlFor="password"
            className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
              formFocus.password ? "top-0 text-xs text-blue-500" : ""
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
        <Link
          to="/login"
          className="text-xs font-medium flex items-center py-4"
        >
          Already have an account? Login Now! &rarr;
        </Link>
      </form>
    </div>
  );
}
