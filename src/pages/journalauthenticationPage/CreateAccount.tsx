import { InputField } from "@/components";
import AuthenticationLayout from "@/layout/AuthenticationLayout";
import { ACCESS_TOKEN } from "@/services/constants";
import { api } from "@/services/endpoint";
import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const FilterForm = {
        email: form.email,
        first_name: form.firstName,
        last_name: form.lastName,
        password: form.password,
        confirm_password: form.confirmPassword,

      }
      console.log("Form submitted:", FilterForm);
      const response = await api.post("api/auth/register/", FilterForm, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log("access token", response.data?.token)
      console.log("success message", response.data?.message) // add this to the success card 
      localStorage.setItem(ACCESS_TOKEN, response.data?.token)
      console.log(response)
      navigate("/signin")
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error(e.response?.data?.detail);
      } else {
        console.error("An unexpected error occurred", e);
      }
    };
  }
  return (
    <AuthenticationLayout>
      <section className={`section`}>
        <div className="sectionContainer mx-auto p-4 md:p-0  flex flex-col lg:flex-row lg:justify-between">
          {/* Left: Form */}
          <form onSubmit={handleSubmit} className="lg:w-2/3 max-w-xl w-full">
            <h1 className="text-2xl font-semibold mb-2">
              Join the PLOS Community
            </h1>
            <p className="mb-6 text-sm text-gray-600">
              Join PLOS today, and help us improve{" "}
              <span className="text-blue-600 underline">Open Access</span>{" "}
              scholarly communications.
            </p>

            <InputField
              label="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <InputField
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            <InputField
              label="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Must be 8+ characters & contain a number and one lowercase"
            />
            <InputField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            <div className="mb-4 flex items-start gap-2">
              <input
                id="agreed"
                type="checkbox"
                name="agreed"
                checked={form.agreed}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <label htmlFor="agreed" className="text-sm text-gray-600">
                I have read and agree to the terms of the{" "}
                <span className="text-blue-600 underline">
                  PLOS Privacy Policy
                </span>{" "}
                and hereby consent to sending personal information to PLOS.
              </label>
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                className="px-4 py-2 border border-gray-400 text-gray-700 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Right: Info */}
          <div className="lg:w-1/3 mt-10 lg:mt-0 lg:ml-10 text-sm text-gray-700">
            <div className="border border-gray-200 rounded p-4 mb-6">
              <p className="font-medium mb-2">Already have an account?</p>
              <ul className="space-y-1 text-blue-600 underline">
                <li>
                  <NavLink to="/signin">Sign in</NavLink>
                </li>
                <li>
                  <NavLink to="/forgotpassword">Forgot Password?</NavLink>
                </li>
                <li>
                  <a href="#">Resend My Confirmation</a>
                </li>
              </ul>

              <p className="mt-4 font-medium">
                After creating an account, you can:
              </p>
              <ul className="list-disc ml-6 mt-1 text-gray-700">
                <li>Save your research</li>
                <li>Comment on scholarly content</li>
                <li>Submit your research to one of the PLOS journals</li>
              </ul>

              <p className="mt-4 font-medium">Why do we need this?</p>
              <p className="text-xs text-gray-600 mt-1">
                We use this basic information for verification, account setup,
                and to contact you. For details, see our{" "}
                <span className="text-blue-600 underline">Privacy Policy</span>.
              </p>

              <p className="mt-2 text-xs text-blue-600 underline">
                <a href="#">Need help? Please contact us</a>
              </p>
            </div>

            <img src="frog.png" alt="frog" className="w-24 mx-auto mt-6" />
          </div>
        </div>
      </section>
    </AuthenticationLayout>
  );
};

export default CreateAccount;
