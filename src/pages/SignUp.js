// // // import { useState } from "react";
// // // import { useNavigate, Link } from "react-router-dom";
// // // import { useAuthContext } from "../context/AuthContext";

// // // export default function Signup() {
// // //   const [usernameFocus, setUsernameFocus] = useState(false);
// // //   const [passwordFocus, setPasswordFocus] = useState(false);
// // //   const [emailFocus, setEmailFocus] = useState(false);
// // //   const [fullnameFocus, setFullnameFocus] = useState(false);

// // //   const [username, setUsername] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [fullname, setFullname] = useState("");

// // //   const { createUser } = useAuthContext();
// // //   const navigate = useNavigate();

// // //   function handleSubmit(event) {
// // //     event.preventDefault();
// // //     const newUser = createUser(username, password, email, fullname);
// // //     if (newUser) navigate("/app");
// // //   }

// // //   return (
// // //     <div className="flex justify-center items-center h-screen bg-gray-100">
// // //       <form
// // //         className="bg-white p-6 rounded-lg shadow-md w-96"
// // //         onSubmit={handleSubmit}
// // //       >
// // //         <h2 className="text-2xl font-bold mb-8 text-center">Signup</h2>

// // //         {/* Fullname Field */}
// // //         <div className="relative mb-6">
// // //           <input
// // //             type="text"
// // //             id="fullname"
// // //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// // //               fullnameFocus || fullname === "" ? "pt-6" : ""
// // //             }`}
// // //             onFocus={() => setFullnameFocus(true)}
// // //             onBlur={(e) => setFullnameFocus(e.target.value !== "")}
// // //             onChange={(e) => setFullname(e.target.value)}
// // //             value={fullname}
// // //           />
// // //           <label
// // //             htmlFor="fullname"
// // //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// // //               fullnameFocus ? "top-0 text-xs text-blue-500" : ""
// // //             }`}
// // //           >
// // //             Fullname
// // //           </label>
// // //         </div>

// // //         {/* Email Field */}
// // //         <div className="relative mb-6">
// // //           <input
// // //             type="email"
// // //             id="email"
// // //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// // //               emailFocus || email === "" ? "pt-6" : ""
// // //             }`}
// // //             onFocus={() => setEmailFocus(true)}
// // //             onBlur={(e) => setEmailFocus(e.target.value !== "")}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             value={email}
// // //           />
// // //           <label
// // //             htmlFor="email"
// // //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// // //               emailFocus ? "top-0 text-xs text-blue-500" : ""
// // //             }`}
// // //           >
// // //             Email
// // //           </label>
// // //         </div>

// // //         {/* Username Field */}
// // //         <div className="relative mb-6">
// // //           <input
// // //             type="text"
// // //             id="username"
// // //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// // //               usernameFocus || username === "" ? "pt-6" : ""
// // //             }`}
// // //             onFocus={() => setUsernameFocus(true)}
// // //             onBlur={(e) => setUsernameFocus(e.target.value !== "")}
// // //             onChange={(e) => setUsername(e.target.value)}
// // //             value={username}
// // //           />
// // //           <label
// // //             htmlFor="username"
// // //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// // //               usernameFocus ? "top-0 text-xs text-blue-500" : ""
// // //             }`}
// // //           >
// // //             Username
// // //           </label>
// // //         </div>

// // //         {/* Password Field */}
// // //         <div className="relative mb-6">
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// // //               passwordFocus || password === "" ? "pt-6" : ""
// // //             }`}
// // //             onFocus={() => setPasswordFocus(true)}
// // //             onBlur={(e) => setPasswordFocus(e.target.value !== "")}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             value={password}
// // //           />
// // //           <label
// // //             htmlFor="password"
// // //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// // //               passwordFocus ? "top-0 text-xs text-blue-500" : ""
// // //             }`}
// // //           >
// // //             Password
// // //           </label>
// // //         </div>

// // //         <button
// // //           type="submit"
// // //           className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
// // //         >
// // //           Signup
// // //         </button>
// // //         <Link
// // //           to="/login"
// // //           className="text-xs font-medium flex items-center py-4"
// // //         >
// // //           Already have an account? Login Now! &rarr;
// // //         </Link>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // import { useState } from "react";
// // // import { useNavigate, Link } from "react-router-dom";
// // // import { useAuthContext } from "../context/AuthContext";

// // // export default function Signup() {
// // //   const [formFocus, setFormFocus] = useState({
// // //     firstName: false,
// // //     lastName: false,
// // //     email: false,
// // //     password: false,
// // //   });

// // //   const [formData, setFormData] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     email: "",
// // //     password: "",
// // //   });

// // //   const [required, setRequired] = useState("");

// // //   const { createUser, isLoading } = useAuthContext();
// // //   const navigate = useNavigate();

// // //   const handleFocus = (field) => {
// // //     setFormFocus((prevFocus) => ({
// // //       ...prevFocus,
// // //       [field]: true,
// // //     }));
// // //   };

// // //   const handleBlur = (field, value) => {
// // //     setFormFocus((prevFocus) => ({
// // //       ...prevFocus,
// // //       [field]: value !== "",
// // //     }));
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   async function handleSubmit(event) {
// // //     event.preventDefault();
// // //     if (!formData.email || !formData.firstName) {
// // //       setRequired("Fill all Required Fields.");
// // //       return;
// // //     }
// // //     setRequired("");
// // //     const newUser = await createUser(formData);
// // //     console.log(newUser);
// // //     if (newUser) navigate("/login");
// // //     setRequired("User Already Registered");
// // //   }

// // //   return (
// // //     <div className="flex justify-center items-center h-screen bg-gray-100 relative">
// // //       {isLoading && <span className="loader"></span>}
// // //       <form
// // //         className={`bg-white p-6 rounded-lg shadow-md w-96 relative text-xs md:text-sm ${
// // //           isLoading ? "blur-sm" : ""
// // //         }`}
// // //         onSubmit={handleSubmit}
// // //       >
// // //         <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

// // //         <p className="py-4 text-red-500/90 tracking-wide text-xs md:text-sm">
// // //           {required}
// // //         </p>

// // //         {/* First Name Field */}
// // //         <div className="relative mb-6">
// // //           <input
// // //             type="text"
// // //             id="firstName"
// // //             name="firstName"
// // //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// // //               formFocus.firstName || formData.firstName === "" ? "pt-6" : ""
// // //             }`}
// // //             onFocus={() => handleFocus("firstName")}
// // //             onBlur={(e) => handleBlur("firstName", e.target.value)}
// // //             onChange={handleChange}
// // //             value={formData.firstName}
// // //           />
// // //           <label
// // //             htmlFor="firstName"
// // //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// // //               formFocus.firstName ? "top-0 text-xs text-blue-500" : ""
// // //             }`}
// // //           >
// // //             First Name
// // //           </label>
// // //         </div>

// // //         {/* Last Name Field */}
// // //         <div className="relative mb-6">
// // //           <input
// // //             type="text"
// // //             id="lastName"
// // //             name="lastName"
// // //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// // //               formFocus.lastName || formData.lastName === "" ? "pt-6" : ""
// // //             }`}
// // //             onFocus={() => handleFocus("lastName")}
// // //             onBlur={(e) => handleBlur("lastName", e.target.value)}
// // //             onChange={handleChange}
// // //             value={formData.lastName}
// // //           />
// // //           <label
// // //             htmlFor="lastName"
// // //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// // //               formFocus.lastName ? "top-0 text-xs text-blue-500" : ""
// // //             }`}
// // //           >
// // //             Last Name
// // //           </label>
// // //         </div>

// // //         {/* Email Field */}
// // //         <div className="relative mb-6">
// // //           <input
// // //             type="email"
// // //             id="email"
// // //             name="email"
// // //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// // //               formFocus.email || formData.email === "" ? "pt-6" : ""
// // //             }`}
// // //             onFocus={() => handleFocus("email")}
// // //             onBlur={(e) => handleBlur("email", e.target.value)}
// // //             onChange={handleChange}
// // //             value={formData.email}
// // //           />
// // //           <label
// // //             htmlFor="email"
// // //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// // //               formFocus.email ? "top-0 text-xs text-blue-500" : ""
// // //             }`}
// // //           >
// // //             Email
// // //           </label>
// // //         </div>

// // //         {/* Password Field */}
// // //         <div className="relative mb-6">
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             name="password"
// // //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// // //               formFocus.password || formData.password === "" ? "pt-6" : ""
// // //             }`}
// // //             onFocus={() => handleFocus("password")}
// // //             onBlur={(e) => handleBlur("password", e.target.value)}
// // //             onChange={handleChange}
// // //             value={formData.password}
// // //           />
// // //           <label
// // //             htmlFor="password"
// // //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// // //               formFocus.password ? "top-0 text-xs text-blue-500" : ""
// // //             }`}
// // //           >
// // //             Password
// // //           </label>
// // //         </div>

// // //         <button
// // //           type="submit"
// // //           className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
// // //         >
// // //           Signup
// // //         </button>
// // //         <Link
// // //           to="/login"
// // //           className="text-xs font-medium flex items-center py-4"
// // //         >
// // //           Already have an account? Login Now! &rarr;
// // //         </Link>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // import { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import { useAuthContext } from "../context/AuthContext";
// // import Tile from "../components/Tile";

// // export default function Signup() {
// //   const [formFocus, setFormFocus] = useState({
// //     firstName: false,
// //     lastName: false,
// //     email: false,
// //     password: false,
// //   });

// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     password: "",
// //     preferredSports: {}, // New state for preferred sports
// //   });

// //   const [required, setRequired] = useState("");

// //   const { createUser, isLoading } = useAuthContext();
// //   const navigate = useNavigate();

// //   const handleFocus = (field) => {
// //     setFormFocus((prevFocus) => ({
// //       ...prevFocus,
// //       [field]: true,
// //     }));
// //   };

// //   const handleBlur = (field, value) => {
// //     setFormFocus((prevFocus) => ({
// //       ...prevFocus,
// //       [field]: value !== "",
// //     }));
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   async function handleSubmit(event) {
// //     event.preventDefault();
// //     if (!formData.email || !formData.firstName) {
// //       setRequired("Fill all Required Fields.");
// //       return;
// //     }
// //     setRequired("");
// //     const newUser = await createUser(formData);
// //     console.log(newUser);
// //     if (newUser) navigate("/login");
// //     setRequired("User Already Registered");
// //   }

// //   const toggleSportSelection = (sport) => {
// //     // setFormData((prevData) => {
// //     //   console.log(sport);
// //     //   const isSportSelected = prevData.preferredSports.sport;
// //     //   console.log(isSportSelected);
// //     //   return {
// //     //     ...prevData,
// //     //     preferredSports: isSportSelected
// //     //       ? { ...prevData.preferredSports, sport }
// //     //       : prevData.prefferedSports,
// //     //     // : "",
// //     //   };
// //     //   // console.log(prevData);
// //     // });
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       preferredSports: {
// //         ...prevData.preferredSports,
// //         [sport]: !prevData.preferredSports[sport], // Toggle the selected sport
// //       },
// //     }));
// //     console.log(formData);
// //   };

// //   return (
// //     <div className="flex justify-center items-center h-screen bg-gray-100 relative">
// //       {isLoading && <span className="loader"></span>}
// //       <form
// //         className={`bg-white p-6 rounded-lg shadow-md w-96 relative text-xs md:text-sm ${
// //           isLoading ? "blur-sm" : ""
// //         }`}
// //         onSubmit={handleSubmit}
// //       >
// //         <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

// //         <p className="py-4 text-red-500/90 tracking-wide text-xs md:text-sm">
// //           {required}
// //         </p>

// //         {/* First Name Field */}
// //         <div className="relative mb-6">
// //           <input
// //             type="text"
// //             id="firstName"
// //             name="firstName"
// //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// //               formFocus.firstName || formData.firstName === "" ? "pt-6" : ""
// //             }`}
// //             onFocus={() => handleFocus("firstName")}
// //             onBlur={(e) => handleBlur("firstName", e.target.value)}
// //             onChange={handleChange}
// //             value={formData.firstName}
// //           />
// //           <label
// //             htmlFor="firstName"
// //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// //               formFocus.firstName ? "top-0 text-xs text-blue-500" : ""
// //             }`}
// //           >
// //             First Name
// //           </label>
// //         </div>

// //         {/* Other input fields here (Last Name, Email, Password) */}

// //         <div className="relative mb-6">
// //           <input
// //             type="text"
// //             id="lastName"
// //             name="lastName"
// //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// //               formFocus.lastName || formData.lastName === "" ? "pt-6" : ""
// //             }`}
// //             onFocus={() => handleFocus("lastName")}
// //             onBlur={(e) => handleBlur("lastName", e.target.value)}
// //             onChange={handleChange}
// //             value={formData.lastName}
// //           />
// //           <label
// //             htmlFor="lastName"
// //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// //               formFocus.lastName ? "top-0 text-xs text-blue-500" : ""
// //             }`}
// //           >
// //             Last Name
// //           </label>
// //         </div>

// //         {/* Email Field */}
// //         <div className="relative mb-6">
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// //               formFocus.email || formData.email === "" ? "pt-6" : ""
// //             }`}
// //             onFocus={() => handleFocus("email")}
// //             onBlur={(e) => handleBlur("email", e.target.value)}
// //             onChange={handleChange}
// //             value={formData.email}
// //           />
// //           <label
// //             htmlFor="email"
// //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// //               formFocus.email ? "top-0 text-xs text-blue-500" : ""
// //             }`}
// //           >
// //             Email
// //           </label>
// //         </div>

// //         {/* Password Field */}
// //         <div className="relative mb-6">
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
// //               formFocus.password || formData.password === "" ? "pt-6" : ""
// //             }`}
// //             onFocus={() => handleFocus("password")}
// //             onBlur={(e) => handleBlur("password", e.target.value)}
// //             onChange={handleChange}
// //             value={formData.password}
// //           />
// //           <label
// //             htmlFor="password"
// //             className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
// //               formFocus.password ? "top-0 text-xs text-blue-500" : ""
// //             }`}
// //           >
// //             Password
// //           </label>
// //         </div>

// //         {/* Sports Selection Section */}
// //         <Tile
// //           formData={formData}
// //           setFormData={setFormData}
// //           toggleSportSelection={toggleSportSelection}
// //         />
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
// //         >
// //           Signup
// //         </button>
// //         <Link
// //           to="/login"
// //           className="text-xs font-medium flex items-center py-4"
// //         >
// //           Already have an account? Login Now! &rarr;
// //         </Link>
// //       </form>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";
// import Tile from "../components/Tile";

// export default function Signup() {
//   const [currentStep, setCurrentStep] = useState(1); // Step state: 1 for user details, 2 for preferred sports
//   const [formFocus, setFormFocus] = useState({
//     firstName: false,
//     lastName: false,
//     email: false,
//     password: false,
//   });

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     preferredSports: {},
//   });

//   const [required, setRequired] = useState("");
//   const { createUser, isLoading } = useAuthContext();
//   const navigate = useNavigate();

//   const handleFocus = (field) => {
//     setFormFocus((prevFocus) => ({
//       ...prevFocus,
//       [field]: true,
//     }));
//   };

//   const handleBlur = (field, value) => {
//     setFormFocus((prevFocus) => ({
//       ...prevFocus,
//       [field]: value !== "",
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleNext = (event) => {
//     event.preventDefault();
//     // Validate the first step fields
//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.email ||
//       !formData.password
//     ) {
//       setRequired("Please fill out all required fields.");
//       return;
//     }
//     setRequired("");
//     setCurrentStep(2); // Move to the next step
//   };

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const newUser = await createUser(formData);
//     if (newUser) {
//       navigate("/login");
//     } else {
//       setRequired("User already registered.");
//     }
//   }

//   const toggleSportSelection = (sport) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       preferredSports: {
//         ...prevData.preferredSports,
//         [sport]: !prevData.preferredSports[sport], // Toggle the selected sport
//       },
//     }));
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 relative">
//       {isLoading && <span className="loader"></span>}
//       <form
//         className={`bg-white p-6 rounded-lg shadow-md w-96 relative text-xs md:text-sm ${
//           isLoading ? "blur-sm" : ""
//         }`}
//         onSubmit={currentStep === 1 ? handleNext : handleSubmit}
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
//         <p className="py-4 text-red-500/90 tracking-wide text-xs md:text-sm">
//           {required}
//         </p>

//         {currentStep === 1 && (
//           <>
//             {/* First Name Field */}
//             <div className="relative mb-6">
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
//                   formFocus.firstName || formData.firstName === "" ? "pt-6" : ""
//                 }`}
//                 onFocus={() => handleFocus("firstName")}
//                 onBlur={(e) => handleBlur("firstName", e.target.value)}
//                 onChange={handleChange}
//                 value={formData.firstName}
//               />
//               <label
//                 htmlFor="firstName"
//                 className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
//                   formFocus.firstName ? "top-0 text-xs text-blue-500" : ""
//                 }`}
//               >
//                 First Name
//               </label>
//             </div>

//             {/* Other input fields (Last Name, Email, Password) */}
//             <div className="relative mb-6">
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
//                   formFocus.lastName || formData.lastName === "" ? "pt-6" : ""
//                 }`}
//                 onFocus={() => handleFocus("lastName")}
//                 onBlur={(e) => handleBlur("lastName", e.target.value)}
//                 onChange={handleChange}
//                 value={formData.lastName}
//               />
//               <label
//                 htmlFor="lastName"
//                 className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
//                   formFocus.lastName ? "top-0 text-xs text-blue-500" : ""
//                 }`}
//               >
//                 Last Name
//               </label>
//             </div>

//             <div className="relative mb-6">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
//                   formFocus.email || formData.email === "" ? "pt-6" : ""
//                 }`}
//                 onFocus={() => handleFocus("email")}
//                 onBlur={(e) => handleBlur("email", e.target.value)}
//                 onChange={handleChange}
//                 value={formData.email}
//               />
//               <label
//                 htmlFor="email"
//                 className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
//                   formFocus.email ? "top-0 text-xs text-blue-500" : ""
//                 }`}
//               >
//                 Email
//               </label>
//             </div>

//             <div className="relative mb-6">
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className={`peer h-10 w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
//                   formFocus.password || formData.password === "" ? "pt-6" : ""
//                 }`}
//                 onFocus={() => handleFocus("password")}
//                 onBlur={(e) => handleBlur("password", e.target.value)}
//                 onChange={handleChange}
//                 value={formData.password}
//               />
//               <label
//                 htmlFor="password"
//                 className={`absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 ${
//                   formFocus.password ? "top-0 text-xs text-blue-500" : ""
//                 }`}
//               >
//                 Password
//               </label>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
//             >
//               Next
//             </button>
//           </>
//         )}

//         {currentStep === 2 && (
//           <>
//             {/* Sports Selection Section */}
//             <Tile
//               formData={formData}
//               setFormData={setFormData}
//               toggleSportSelection={toggleSportSelection}
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
//             >
//               Submit
//             </button>
//           </>
//         )}

//         {currentStep === 1 && (
//           <Link
//             to="/login"
//             className="text-xs font-medium flex items-center py-4"
//           >
//             Already have an account? Login Now! &rarr;
//           </Link>
//         )}
//       </form>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuthContext } from "../context/AuthContext";
// import Tile from "../components/Tile";
// import InputFields from "../components/InputFields";

// export default function Signup() {
//   const [currentStep, setCurrentStep] = useState(1); // Step state: 1 for user details, 2 for preferred sports

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     preferredSports: [], // Changed state structure for sports
//   });

//   const [required, setRequired] = useState("");
//   const { createUser, isLoading } = useAuthContext();
//   const navigate = useNavigate();

//   const handleNext = (event) => {
//     event.preventDefault();
//     // Validate the first step fields
//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.email ||
//       !formData.password
//     ) {
//       setRequired("Please fill out all required fields.");
//       return;
//     }
//     setRequired("");
//     setCurrentStep(2); // Move to the next step
//   };

//   async function handleSubmit(event) {
//     event.preventDefault();
//     const newUser = await createUser(formData);

//     if (newUser) {
//       navigate("/login");
//     } else {
//       setRequired("User already registered.");
//     }
//     // console.log(formData);
//   }

//   const toggleSportSelection = (sportName) => {
//     setFormData((prevData) => {
//       const sportExists = prevData.preferredSports.some(
//         (sport) => sport.sport === sportName
//       );

//       // If the sport already exists, remove it from the array
//       if (sportExists) {
//         return {
//           ...prevData,
//           preferredSports: prevData.preferredSports.filter(
//             (sport) => sport.sport !== sportName
//           ),
//         };
//       }

//       // If the sport does not exist, add it with an initial timeSpent value of 0
//       return {
//         ...prevData,
//         preferredSports: [
//           ...prevData.preferredSports,
//           { sport: sportName, timeSpent: 0 },
//         ],
//       };
//     });
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 relative">
//       {isLoading && <span className="loader"></span>}
//       <form
//         className={`bg-white p-6 rounded-lg shadow-md w-96 relative text-xs md:text-sm ${
//           isLoading ? "blur-sm" : ""
//         }`}
//         onSubmit={currentStep === 1 ? handleNext : handleSubmit}
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
//         <p className="py-4 text-red-500/90 tracking-wide text-xs md:text-sm">
//           {required}
//         </p>

//         {currentStep === 1 && (
//           <InputFields formData={formData} setFormData={setFormData} />
//         )}
//         {currentStep === 2 && (
//           <>
//             {/* Sports Selection Section */}
//             <Tile
//               formData={formData}
//               setFormData={setFormData}
//               toggleSportSelection={toggleSportSelection}
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition duration-300"
//             >
//               Submit
//             </button>
//           </>
//         )}
//         {currentStep === 1 && (
//           <Link
//             to="/login"
//             className="text-xs font-medium flex items-center py-4"
//           >
//             Already have an account? Login Now! &rarr;
//           </Link>
//         )}
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import Navbar from "../components/NavBar";
import Tile from "../components/Tile";
import InputFields from "../components/InputFields";

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    preferredSports: [],
  });

  const [required, setRequired] = useState("");
  const { createUser, isLoading } = useAuthContext();
  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      setRequired("Please fill out all required fields.");
      return;
    }
    setRequired("");
    setCurrentStep(2);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const newUser = await createUser(formData);

    if (newUser) {
      navigate("/login");
    } else {
      setRequired("User already registered.");
    }
  }

  const toggleSportSelection = (sportName) => {
    setFormData((prevData) => {
      const sportExists = prevData.preferredSports.some(
        (sport) => sport.sport === sportName
      );

      if (sportExists) {
        return {
          ...prevData,
          preferredSports: prevData.preferredSports.filter(
            (sport) => sport.sport !== sportName
          ),
        };
      }

      return {
        ...prevData,
        preferredSports: [
          ...prevData.preferredSports,
          { sport: sportName, timeSpent: 0 },
        ],
      };
    });
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] min-h-screen px-4 md:px-0">
        <div className="bg-green-600/50 flex flex-col px-4 py-8 text-green-200 relative">
          {isLoading && <span className="loader"></span>}
          <p className="font-bold text-center text-3xl tracking-wide mb-6">
            Create an Account
          </p>
          <div className="flex gap-2 justify-center mb-4">
            <FaGoogle className="border-green-200 border-2 rounded-full text-4xl p-1" />
          </div>
          <p className="text-sm mb-4">or use your details to register.</p>
          <p className="text-sm text-red-900">{required}</p>

          {currentStep === 1 && (
            <div className="flex flex-col gap-4">
              <InputFields formData={formData} setFormData={setFormData} />
              <button
                onClick={handleNext}
                className="bg-green-900 text-2xl px-4 py-1 rounded-xl border-2 border-stone-300 mt-4"
              >
                Next
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <>
              <Tile
                formData={formData}
                setFormData={setFormData}
                toggleSportSelection={toggleSportSelection}
              />
              <button
                type="submit"
                className="bg-green-900 text-2xl px-4 py-1 rounded-xl border-2 border-stone-300 mt-4"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </>
          )}

          {currentStep === 1 && (
            <Link
              to="/login"
              className="text-xs font-medium flex items-center py-4"
            >
              Already have an account? Login Now! &rarr;
            </Link>
          )}
        </div>
        <div className="hidden md:block">
          {/* Placeholder for image or additional content */}
        </div>
      </div>
    </>
  );
}
