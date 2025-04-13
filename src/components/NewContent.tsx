import React from "react";

type Props = {};

const NewContent = (props: Props) => {
  return (
    <div className="w-full bg-white rounded-2l shadow-lg p-6 ">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Get new content from PLOS Biology in your inbox
      </h2>

      <form className="space-y-8 w-full">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Please enter your email."
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="">
          <div className="g-recaptcha" data-sitekey="your_site_key_here"></div>
        </div>

        <button
          type="submit"
          className="px-4 bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition duration-300"
        >
          SIGN UP
        </button>
      </form>

      <p className="text-xs text-gray-600 mt-4">
        <em>
          PLOS will use your email address to provide content from PLOS Biology.
          You can find out more about how PLOS processes your data by reading
          our{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          . You can unsubscribe at any time by clicking the unsubscribe link in
          our emails or by contacting us at privacy@plos.org.
        </em>
      </p>
    </div>
  );
};

export default NewContent;
