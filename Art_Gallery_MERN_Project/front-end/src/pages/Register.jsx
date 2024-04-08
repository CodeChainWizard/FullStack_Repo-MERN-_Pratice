import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    useremail: "",
    password: "",
    name: "",
    number: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        registerData
      );
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterData = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block bg-gradient-to-t from-teal-200 to-sky-400 object-cover"></div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Register Form</h1>
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
                value={registerData.useremail}
                onChange={(e) => handleRegisterData(e)}
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
                value={registerData.password}
                onChange={(e) => handleRegisterData(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                value={registerData.name}
                onChange={(e) => handleRegisterData(e)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                maxLength={10}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                value={registerData.number}
                onChange={(e) => handleRegisterData(e)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Register
            </button>
          </form>
          <div className="mt-6 text-blue-500 text-center">
            <Link to="/login" className="hover:underline">
              Sign in Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
