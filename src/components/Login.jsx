import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formValues.username.trim()) errors.username = "Username is required.";
    if (!formValues.email) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email))
      errors.email = "Email is invalid.";
    if (!formValues.password) errors.password = "Password is required.";
    else if (formValues.password.length < 6)
      errors.password = "Password must be at least 6 characters long.";
    if (errors.length === 0) {
      alert("Login successful!");
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to freshmart</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;