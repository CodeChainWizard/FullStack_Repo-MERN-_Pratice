/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    useremail: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "http://localhost:8080/login",
    //     loginData
    //   );
    //   if (response.statusText === "OK") {
    //     const { success, message } = response.data;
    //     console.log(response.data);
    //     if (success) {
    //       console.log("Login Success");
    //       navigate("/Home");
    //     } else {
    //       console.log(message, "message");
    //     }
    //   }
    // } catch (error) {
    //   console.log(error, "error");
    // }
  };

  const handleLogin = (e) => {
    // const { name, value } = e.target;
    // setLoginData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  return (
    <div>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block bg-gradient-to-t from-teal-200 to-sky-400 object-cover"></div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login Form</h1>
          <form action="" method="POST" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Useremail
              </label>
              <input
                type="text"
                id="useremail"
                name="useremail"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                required
                onChange={(e) => handleLogin(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                required
                onChange={(e) => handleLogin(e)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-blue-500 text-center">
            <Link to="/register" className="hover:underline">
              Sign up Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
