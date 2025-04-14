import { InputField } from "@/components";
import AuthenticationLayout from "@/layout/AuthenticationLayout";
import { ACCESS_TOKEN } from "@/services/constants";
import { api } from "@/services/endpoint";
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      console.log("Sign in:", { email, password });
      const response = await api.post("api/auth/login/", { email, password }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log("access token", response.data?.token)
      console.log("success message", response.data?.message) // add this to the success card 
      localStorage.setItem(ACCESS_TOKEN, response.data?.token)
      console.log(response)
      navigate("/journalcategory")
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.error(e.response?.data?.detail);
      } else {
        console.error("An unexpected error occurred", e);
      }
    };
  };

  return (
    <AuthenticationLayout>
      <section className={`section`}>
        <div className="sectionContainer mx-auto p-4 md:p-0  flex flex-col md:flex-row items-center justify-between">
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 max-w-md">
            <h2 className="text-2xl font-semibold mb-6">Sign in to PLOS</h2>

            <InputField
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="mb-4">
              <NavLink
                to="/forgotpassword"
                className="text-blue-600 text-sm hover:underline"
              >
                Forgot your password?
              </NavLink>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign In
            </button>

            <div className="mt-6 text-sm">
              <NavLink
                to="/createaccount"
                className="text-blue-600 hover:underline mr-2"
              >
                Register for a New Account
              </NavLink>
              |
              <a href="#" className="text-blue-600 hover:underline ml-2">
                Resend e-mail address confirmation
              </a>
            </div>
          </form>

          <div className="mt-10 md:mt-0 md:ml-10">
            <img
              src="/frog.png" // replace with the actual path to the frog image
              alt="Frog"
              className="w-48 h-auto"
            />
          </div>
        </div>
      </section>
    </AuthenticationLayout>
  );
};

export default SignIn;
