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
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        {/* Icon */}
        <img
          src="/images/jobnav.png"
          alt="Job Portal Icon"
          width="60"
          height="60"
        />

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={handleMenuToggler}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <ul
          className={`lg:flex gap-12 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Sign up and login buttons */}
        <div className="text-semibold text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Log in
          </Link>
          <Link
            to="/signup"
            className="py-2 px-5 border rounded bg-green-500 text-white"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Mobile sign up and login buttons */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } space-y-4 mt-4`}
      >
        <Link to="/login" className="py-2 px-5 border rounded block">
          Log in
        </Link>
        <Link
          to="/signup"
          className="py-2 px-5 border rounded bg-green-500 text-white block"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
