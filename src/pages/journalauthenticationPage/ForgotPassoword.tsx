// pages/ForgotPassword.tsx
import React, { useState } from "react";
import { InputField } from "@/components";
import AuthenticationLayout from "@/layout/AuthenticationLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle email submission logic here
    console.log("Reset password for:", email);
  };

  return (
    <AuthenticationLayout>
      <section className={`section`}>
        <div className=" sectionContainer mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 max-w-md">
            <h2 className="text-2xl font-semibold mb-4">
              Forgot your password?
            </h2>
            <p className="mb-6 text-gray-700">
              We will send you an email with a link to reset your password.
            </p>

            <InputField
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
            />

            <p className="text-sm text-gray-500 mb-4">
              Instructions for resetting your password will be sent to this
              email address.
            </p>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>

            <div className="mt-6 text-sm">
              <a href="#" className="text-blue-600 hover:underline mr-2">
                Register for a New Account
              </a>
              |
              <a href="#" className="text-blue-600 hover:underline ml-2">
                Sign in
              </a>
            </div>
          </form>

          <div className="mt-10 md:mt-0 md:ml-10">
            <img
              src="frog.png" // Replace with actual frog image path
              alt="Frog"
              className="w-48 h-auto"
            />
          </div>
        </div>
      </section>
    </AuthenticationLayout>
  );
};

export default ForgotPassword;
