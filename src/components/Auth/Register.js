// src/components/Auth/Register.js

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../services/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ email, password });
      history.push("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
