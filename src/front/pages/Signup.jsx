import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // basic validation
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      // remove trailing slash if it exists
      const backend = import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, "");

      const response = await fetch(`${backend}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        alert(data.msg || "Signup failed.");
        return;
      }

      alert("Account created! Now log in.");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed (network/server error).");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col text-center">
          <h1 className="display-4">Sign Up</h1>
          <p className="lead">Create an account to continue.</p>

          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-3"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-3"
            />

            <button type="submit" className="btn btn-dark btn-lg">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
