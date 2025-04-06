import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search } from "./svgComponent/Search";
import { expandedLinks, navLinks } from "@/data/data";

type Props = {};

const Navbar = (props: Props) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <header
      className={`bg-background h-[100px] w-full transition-all${
        expand
          ? "  h-[150vh] md:h-screen transition duration-600 ease"
          : "transition duration-700 ease"
      }  relative`}
    >
      <div
        className={`w-full max-w-[1400px] px-2 mx-auto line-below transition duration-700 ease-in-out`}
      >
        <nav className={`w-full flex h-20 justify-between  items-center`}>
          <NavLink to="/">
            {" "}
            <img src="logo.png" className="w-[80px]" alt="logo" />{" "}
          </NavLink>

          <ul className={`hidden md:flex gap-[1rem]`}>
            {navLinks.map((navlink) => (
              <li>
                <NavLink to={navlink.path} className={`text-accentone`}>
                  {navlink.link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={`flex gap-4 items-center`}>
            <span>
              <Search />
            </span>

            <button
              className={`space-y-2 cursor-pointer transition-all duration-300 ease-in-out`}
              onClick={handleExpand}
            >
              {/* Hamburger Line 1 */}
              <span
                className={`w-[25px] h-[1px] bg-accentone block transition-all duration-300 ease-in-out ${
                  expand ? "rotate-45 translate-y-[8px]" : ""
                }`}
              ></span>

              {/* Hamburger Line 2 */}
              <span
                className={`w-[25px] h-[1px] bg-accentone block transition-all duration-300 ease-in-out ${
                  expand ? "opacity-0" : ""
                }`}
              ></span>

              {/* Hamburger Line 3 */}
              <span
                className={`w-[25px] h-[1px] bg-accentone block transition-all duration-300 ease-in-out ${
                  expand ? "-rotate-45 translate-y-[-10px]" : ""
                }`}
              ></span>
            </button>
          </div>
        </nav>

        <div
          className={`transition-all space-y-5 text-accentone px-1 md:px-0 pt-15 md:flex md: justify-between ${
            expand
              ? "transition duration-1000 ease-in-out opacity-100"
              : "transition duration-800 ease-in-out opacity-0 overflow-hidden"
          }`}
        >
          <ul className={`md:hidden  space-y-5`}>
            {navLinks.map((navlink) => (
              <li>
                <NavLink to={navlink.path} className={`text-accentone`}>
                  {navlink.link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={`hidden md:block space-y-6 max-w-[500px]`}>
            <p>
              PLOS is a non-profit organization on a mission to drive open
              science forward with measurable, meaningful change in research
              publishing, policy, and practice.
            </p>
            <p>
              Building on a strong legacy of pioneering innovation, PLOS
              continues to be a catalyst, reimagining models to meet open
              science principles, removing barriers and promoting inclusion in
              knowledge creation and sharing, and publishing research outputs
              that enable everyone to learn from, reuse and build upon
              scientific knowledge.
            </p>

            <p>
              We believe in a better future where science is open to all, for
              all.
            </p>
          </div>

          {expandedLinks.map((title) => (
            <ul className={`space-y-3 pb-6 `}>
              <span
                className={`pb-0.5 inline-block  border-b-2 border-accentone `}
              >
                {title.title}
              </span>

              {title.links.map((link) => (
                <li className={``}>{link}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
