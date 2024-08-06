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
        {/* Icon */}
        <img
          src="https://images.app.goo.gl/VrFxPEMgHwpAYiA5A"
          alt="Job Portal Icon"
          width="60"
          height="60"
        />
        {/* Nav items */}
        <ul className="flex gap-12">
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
    </header>
  );
};

export default Navbar;
