import { NavLink } from "react-router-dom";

const AuthenticationNavbar = () => {
  return (
    <header className={`  p-4 bg-backgroundtwo border-t-4 border-t-[#3C63AF]`}>
      <nav className={`sectionContainer p-4 md:p-0`}>
        <NavLink to="/">
          <img src="logo.png" alt="" />
        </NavLink>
      </nav>
    </header>
  );
};

export default AuthenticationNavbar;
