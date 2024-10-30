function InputFields({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <input
        className="bg-green-100 text-stone-800 p-2 rounded-md"
        placeholder="First Name"
        type="text"
        name="firstName" // Add name attribute
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        className="bg-green-100 text-stone-800 p-2 rounded-md"
        placeholder="Last Name"
        type="text"
        name="lastName" // Add name attribute
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        className="bg-green-100 text-stone-800 p-2 rounded-md"
        placeholder="Email"
        type="email"
        name="email" // Add name attribute
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className="bg-green-100 text-stone-800 p-2 rounded-md"
        placeholder="Password"
        type="password"
        name="password" // Add name attribute
        value={formData.password}
        onChange={handleChange}
      />
    </>
  );
}

export default InputFields;
