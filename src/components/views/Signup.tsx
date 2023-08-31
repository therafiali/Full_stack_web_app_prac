"use client";
import { cartContext } from "@/app/global/Context";
import React, { useContext, useState } from "react";

interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
}

const SignupFormComp = () => {
  let { signUpUser, signUpVaGoogle, loading } = useContext(cartContext);
  // State to store input values
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: "",
    email: "",
    password: "",
  });

  // State to store validation errors
  const [errors, setErrors] = useState<SignupFormData>({
    fullName: "",
    email: "",
    password: "",
  });

  // Regex for email validation
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  // Regex for password validation (at least 8 characters, at least one uppercase letter, one lowercase letter, and one digit)
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSignupWithGoogle() {
    console.log("called");
    signUpVaGoogle();
  }

  // Handle signup button click
  const handleSignup = () => {
    // Reset validation errors
    setErrors({
      fullName: "",
      email: "",
      password: "",
    });

    // Perform client-side validation
    let isValid = true;
    if (formData.fullName.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "Full name is required.",
      }));
      isValid = false;
    }

    if (formData.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format.",
      }));
      isValid = false;
    }

    if (formData.password.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required.",
      }));
      isValid = false;
    } else if (!passwordRegex.test(formData.password.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password:
          "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.",
      }));
      isValid = false;
    }

    if (isValid) {
      // Perform signup logic with formData
      console.log("Signing up with data:", formData);
      signUpUser(formData.email, formData.password);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-4">
          Sign Up
        </h2>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="text-purple-700 font-semibold block mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-500 ${
              errors.fullName && "border-red-500"
            }`}
            placeholder="John Doe"
            required
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-purple-700 font-semibold block mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-500 ${
              errors.email && "border-red-500"
            }`}
            placeholder="john@example.com"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="text-purple-700 font-semibold block mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-purple-500 ${
              errors.password && "border-red-500"
            }`}
            placeholder="********"
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <div className="space-y-4">
          <button
            className="bg-purple-700 text-white mx-auto py-2 px-4 rounded-lg w-full hover:bg-purple-600 "
            onClick={handleSignup}
          >
            {loading ? "Loading..." : "Signup"}
          </button>

          <button
          disabled = {loading}
            className="bg-purple-700 text-white py-2 px-4 rounded-lg w-full hover:bg-purple-600"
            onClick={handleSignupWithGoogle}
          >
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupFormComp;
function signUpVaGoogle() {
  throw new Error("Function not implemented.");
}
