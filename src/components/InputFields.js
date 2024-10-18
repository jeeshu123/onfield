import { useState } from "react";

function InputFields({ formData, setFormData }) {
  const [formFocus, setFormFocus] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

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

  return (
    <>
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

      {/* Other input fields (Last Name, Email, Password) */}
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
        Next
      </button>
    </>
  );
}

export default InputFields;
