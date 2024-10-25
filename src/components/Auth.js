import image from "../assets/Login.png";

import Navbar from "./NavBar";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[1fr_3fr] min-h-screen">
        <div className="bg-green-600/50 flex flex-col px-4 py-8 text-green-200">
          <p className="font-bold text-center text-3xl tracking-wide mb-6">
            Welcome Back
          </p>
          <div className="flex gap-2 justify-center mb-4">
            <FaGoogle className="border-green-200 border-2 rounded-full text-4xl p-1" />
          </div>
          <p className="text-sm mb-4 ">or use your account.</p>
          <div className="flex flex-col gap-4 mb-4">
            <input
              className="bg-green-100 text-stone-800 p-2 rounded-md"
              placeholder="Email"
              type="email"
            />
            <input
              className="bg-green-100 text-stone-800 p-2 rounded-md"
              placeholder="Password"
              type="password"
            />
          </div>
          <p className="text-xs mb-6">Forgot your password ?</p>
          <button className="bg-green-900 text-2xl px-4 py-1 rounded-xl border-2 border-stone-300">
            Sign In
          </button>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
