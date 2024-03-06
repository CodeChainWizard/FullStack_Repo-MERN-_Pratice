import React, { useState } from "react";

const Form = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // const handleName = (e) => {
  //   setFormData.name(e.target.value);
  // };

  const alterHandle = (e) => {
    e.preventDefault();
    if (formData.name === "") {
      alert("Enter Name");
    }
    if (formData.email === "") {
      alert("Enter Email");
    }
    if (formData.password === "") {
      alert("Enter Password");
    }

    alert("Form Submitted");
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  // const handleEmail = (e) => {
  //   setFormData.email(e.target.value);
  // };

  // const handlePassword = (e) => {
  //   setFormData.password(e.target.value);
  // };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={alterHandle}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter Name"
        value={formData.name}
        name="name"
        onChange={handleInput}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        value={formData.email}
        placeholder="Enter Email"
        name="email"
        onChange={handleInput}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        value={formData.password}
        placeholder="Enter Password"
        name="password"
        onChange={handleInput}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
