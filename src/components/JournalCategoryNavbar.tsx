import { BASEURL } from "@/services/endpoint";

import { NavLink } from "react-router-dom";

const Header = ({
  journalInfo,
}: {
  journalInfo?: {
    image: string | null;
    name: string | null;
  };
}) => {
  return (
    <header className=" section bg-backgroundtwo">
      <div className="sectionContainer mx-auto space-y-4 px-4 md:px-0">
        {/* Right: Search and Auth */}
        <div className="mt-2 sm:mt-0 flex items-center justify-end space-x-3 text-sm">
          <a href="#" className="text-gray-600 hover:underline">
            plos.org
          </a>
          <NavLink
            to="/createaccount"
            className="text-gray-600 hover:underline"
          >
            Create account
          </NavLink>
          <NavLink
            to="/signin"
            className="bg-blue-900 text-white px-3 py-1 rounded text-sm"
          >
            Sign in
          </NavLink>
        </div>

        {/* Left: Logo */}

        {/* Middle: Navigation */}
        <nav className=" flex justify-between text-sm text-gray-800">
          <div className="flex items-center space-x-2">
            <img
              src={`${BASEURL}${journalInfo?.image}`}
              alt="PLOS"
              width={50}
              className="rounded-lg"
            />
            <span className="text-[0.9rem] font-semibold text-accentone">
              {journalInfo?.name}
            </span>
          </div>

          <div
            className={` hidden md:flex items-center justify-between w-[30%] gap-1`}
          >
            <ul className={`   md:flex gap-4`}>
              <li>
                <a href="#" className="hover:underline font-semibold">
                  Browse
                </a>
              </li>
              <li>
                <NavLink
                  to="/publish"
                  className="hover:underline font-semibold"
                >
                  Publish
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:underline font-semibold">
                  About
                </a>
              </li>
            </ul>

            <div className=" flex flex-col">
              <input
                type="text"
                placeholder="Search"
                className=" px-2 py-1 border rounded text-sm"
              />
              <label className=" text-xs text-gray-500 hover:underline">
                advanced search
              </label>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
