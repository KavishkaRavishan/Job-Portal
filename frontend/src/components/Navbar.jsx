import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Search" },
    { path: "/my-job", title: "My jobs" },
    { path: "/post-job", title: "Post a Job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      <nav className="flex justify-between items-center py-6">
        {/*icon*/}
        <img
          src="\images\jobnav.png"
          width="60"
          height="60"
          viewBox="0 0 60 60"
        />
        {/*nav items */}
        <ul className=" flex gap-12 ">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary ">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/*sign up and login button*/}
        <div className="text-semibold text-primary  font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Log in
          </Link>
          <Link
            to="/login"
            className="py-2 px-5 border rounded bg-green-500 text-white "
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
