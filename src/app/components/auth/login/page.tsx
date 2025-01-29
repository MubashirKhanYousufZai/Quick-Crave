"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import Link from "next/link"; // ✅ Use Link instead of <a>

const LoginPage = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ Toggle Password Visibility

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    if (email === "abc@gmail.com" && password === "12345678") {
      setError("");
      sessionStorage.setItem("token", "dummy-auth-token"); // ✅ Use sessionStorage instead of localStorage

      alert("Login Successful!");

      setTimeout(() => {
        router.push("/"); // ✅ Correct router usage
      }, 500); // ✅ Smooth transition
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <p className="text-center text-sm text-gray-500 mt-2">
          Please login using your account details below.
        </p>

        {error && (
          <p className="text-center text-red-500 mt-2 transition-opacity duration-300">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 border-2 border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 border-2 border-gray-300 rounded-md p-3 pr-10 focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="mb-4">
            <Link href="/forgot-password" className="text-blue-500 text-sm hover:underline">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white w-full h-10 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Dont have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
