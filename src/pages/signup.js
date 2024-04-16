// pages/signup.js
import React from "react";
import Link from "next/link";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  const [error, setError] = React.useState("");

  const handleSignup = async (userData) => {
    try {
      // Call signup API with user data
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      // Redirect to login page upon successful signup
      // You need to implement client-side routing here
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      {error && <p>{error}</p>}
      <SignupForm onSignup={handleSignup} />
      <p>
        Already have an account?{" "}
        <Link href="/login">
          <a>Login</a>
        </Link>
      </p>
    </div>
  );
};

export default Signup;
