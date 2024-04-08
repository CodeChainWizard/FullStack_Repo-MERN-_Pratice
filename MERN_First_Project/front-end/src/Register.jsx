import axios from "axios";
import React, { useState } from "react";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        registerData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error, "Error");
    }
    setRegisterData({
      username: "",
      password: "",
    });
  };

  const handleRegister = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form action="" method="post" onSubmit={(e) => handleSubmitForm(e)}>
        <input
          type="text"
          name="username"
          required
          placeholder="Enter User Name"
          value={registerData.username}
          onChange={(e) => handleRegister(e)}
        />

        <input
          type="password"
          name="password"
          required
          value={registerData.password}
          placeholder="Enter Password"
          onChange={(e) => handleRegister(e)}
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
