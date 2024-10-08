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
          src="https://firebasestorage.googleapis.com/v0/b/job-portal-1c987.appspot.com/o/jobnav.png?alt=media&token=04f07dce-b529-412f-9925-90102eb39ad2"
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
        <ul className="hidden lg:flex gap-12">
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
        <div className="hidden lg:block text-semibold text-primary font-medium space-x-5">
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

      {/* Mobile nav items, sign up, and login buttons */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
        <ul className="space-y-4">
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
        <div className="space-y-4 mt-4">
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
      </div>
    </header>
  );
};

export default Navbar;
