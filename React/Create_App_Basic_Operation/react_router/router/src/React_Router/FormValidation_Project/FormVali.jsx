import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./FormCss.css";

const FormVali = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const password = watch("password");

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confrimPassword, setConfirmPassword] = useState("");
  //   const [age, setAge] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [error, setError] = useState("");

  // const validateForm = () => {
  //   const error = {};

  //   if (!name) {
  //     error.name = "Name is Requried";
  //   }
  //   if (!email) {
  //     error.email = "Email is Requried";
  //   } else if (!"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") {
  //     error.email = "Email is inValid";
  //   }
  //   if (!password) {
  //     error.password = "Password is Requried";
  //   } else if (password.length < 8) {
  //     error.password = "Password must be grather than 8 digit";
  //   }

  //   if (!confrimPassword) {
  //     error.confrimPassword = "Confrim-Password is Requried";
  //   } else if (password.length < 8) {
  //     error.confrimPassword = "Password must be grather than 8 digit";
  //   } else if (password != confrimPassword) {
  //     error.confrimPassword = "Not match to the Password";
  //   }

  //   if (!age) {
  //     error.age = "Age is Requried";
  //   } else if (age < 18) {
  //     error.age = "You are not Eligible";
  //   }

  //   if (!gender) {
  //     error.gender = "Gender is Requried";
  //   }
  //   console.log(error);
  //   return error;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setError(validationErrors);
  //   } else {
  //     console.log("Form Submited...");
  //   }
  // };

  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is Required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid Email Patten",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 8,
                message: "Password must be grather than 8 digit",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label htmlFor="">confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "confirmPassword is Required",
              validate: (value) => value === password || "Password not Match",
            })}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="">Age: </label>
          <input
            type="number"
            name="age"
            {...register("age", {
              required: "Age is Required",
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="">Gender: </label>
          <select
            name="gender"
            id=""
            {...register("gender", {
              required: "Gender is Required",
            })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormVali;
