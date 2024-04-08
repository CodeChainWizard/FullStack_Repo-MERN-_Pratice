import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );

      if (response.statusText === "OK") {
        const { success, message } = response.data;
        if (success) {
          console.log("Login success");
          navigate("/Home");
        } else {
          console.log(message);
        }
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>Login Form</h1>
      <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          required
          value={loginData.username}
          placeholder="Enter User Name"
          onChange={(e) => handleLogin(e)}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          required
          value={loginData.password}
          placeholder="Enter Password"
          onChange={(e) => handleLogin(e)}
        />
        <br />
        <br />
        <p>
          Not Registered Yet? <Link to={"/register"}>Regiter</Link>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
