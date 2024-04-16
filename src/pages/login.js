// pages/login.js
import { useState } from "react";
import React from "react";

import Link from "next/link";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [error, setError] = useState("");

  const handleLogin = async (credentials) => {
    try {
      // Call login API with credentials
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      // Redirect to home page upon successful login
      // You need to implement client-side routing here
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <LoginForm onLogin={handleLogin} />
      <p>
        Don&apos;t have an account?{" "}
        <Link href="/signup">
          <a>Signup</a>
        </Link>
      </p>
    </div>
  );
};

export default Login;
